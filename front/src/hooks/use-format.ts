import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

type Response = {
  formatDate: (date: string) => string;
  formatPrice: (price: number) => string;
};

const useFormat = (): Response => {
  const { t } = useTranslation();

  const formatDate = useCallback((dateStr: string): string => {
    const date = new Date(dateStr);
    return isNaN(date.getTime())
      ? ''
      : new Intl.DateTimeFormat('en-GB', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
          .format(date)
          .replace(/\//g, '.');
  }, []);

  const formatPrice = useCallback(
    (price: number): string => {
      return `${(price / 100).toFixed(2)} ${t('common.currencyUa')}`;
    },
    [t],
  );

  return { formatDate, formatPrice };
};

export default useFormat;
