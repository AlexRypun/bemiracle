import { AxiosError } from 'axios';

import { AnyObject } from '../types/common';

type FieldErrors = {
  [field: string]: string;
};
export const extractFieldErrors = (e: AxiosError): FieldErrors => {
  const response: FieldErrors = {};
  const errors = e?.response?.data?.message;
  if (Array.isArray(errors)) {
    errors.forEach(error => {
      const field = error.property;
      const messages = error?.constraints;
      if (field && messages) {
        response[field] = String(Object.values(messages)[0]);
      }
    });
  }
  return response;
};

export const prepareObjectToFormik = (obj: AnyObject): AnyObject =>
  Object.fromEntries(Object.entries(obj).map(([key, val]) => [key, val === null ? '' : val]));
