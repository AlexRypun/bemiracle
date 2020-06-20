import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Breadcrumb } from '../../types/common';

type ContextProps = {
  breadcrumbs: Breadcrumb[];
  setBreadcrumbs: (breadcrumbs: Breadcrumb[]) => void;
};
const initialValue = {
  breadcrumbs: [],
  setBreadcrumbs: (): void => {},
};

export const BreadcrumbsContext = React.createContext<ContextProps>(initialValue);

const BreadcrumbsProvider: React.FC<React.PropsWithChildren<React.ReactNode>> = ({ children }) => {
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);

  // don't use useHistoryState because of wrong calls order
  const history = useHistory();
  useEffect(() => {
    history.listen(() => setBreadcrumbs([]));
  }, [history]);

  return <BreadcrumbsContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>{children}</BreadcrumbsContext.Provider>;
};

export default BreadcrumbsProvider;
