import { useCallback, useEffect, useRef, useState } from 'react';
import { AxiosRequestConfig } from 'axios';

import { AnyObject } from '../types/common';
import axios from '../services/axios';

type Args = {
  endpoint: string;
  initIsFetching?: boolean;
};
type Response = {
  isFetching: boolean;
  get: <T>(params?: AnyObject) => Promise<T>;
  create: <T>(params: T) => Promise<T>;
  update: <T>(params: T) => Promise<T>;
};

const useRequest = ({ endpoint, initIsFetching = false }: Args): Response => {
  const [isFetching, setIsFetching] = useState<boolean>(initIsFetching);

  const componentIsMounted = useRef(true);
  useEffect(() => {
    return (): void => {
      componentIsMounted.current = false;
    };
  }, []);

  const processRequest = useCallback(
    async <T>(method: 'get' | 'post' | 'patch' | 'delete', data: AnyObject, config: AxiosRequestConfig): Promise<T> => {
      setIsFetching(true);
      let result = null;

      const args: Array<string | AxiosRequestConfig | AnyObject> = [endpoint];
      if (['post', 'patch'].includes(method)) {
        args.push(data);
      }
      args.push(config);

      try {
        // @ts-ignore
        const response = await axios[method](...args);
        result = response.data;
      } catch (e) {
        throw e;
      } finally {
        if (componentIsMounted.current) {
          setIsFetching(false);
        }
      }
      return result;
    },
    [endpoint],
  );

  const get = useCallback(
    <T>(params: AnyObject = {}): Promise<T> => {
      return processRequest('get', {}, { params });
    },
    [processRequest],
  );

  const create = useCallback(
    <T>(params: T): Promise<T> => {
      return processRequest('post', params, {});
    },
    [processRequest],
  );

  const update = useCallback(
    <T>(params: T): Promise<T> => {
      return processRequest('patch', params, {});
    },
    [processRequest],
  );

  return { isFetching, get, create, update };
};

export default useRequest;
