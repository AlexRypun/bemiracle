import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import useRequest from '../../hooks/use-request';
import Loader from '../../components/loader';
import { BreadcrumbsContext } from '../../contexts/breadcrumbs';
import { Order } from '../../types/orders';
import OrderView from '../../components/orders/view';

const OrderPage: React.FC = () => {
  const [order, setOrder] = useState<Order | null>(null);
  const match = useRouteMatch<{ orderId: string }>();
  const endpoint = useMemo(() => `orders/${match.params.orderId}`, [match]);
  const { isFetching, get } = useRequest({ endpoint, initIsFetching: true });
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await get<Order>();
      setOrder(response);
    };
    fetchData();
  }, [get]);

  const { setBreadcrumbs } = useContext(BreadcrumbsContext);
  const { t } = useTranslation();

  useEffect(() => {
    if (order) {
      setBreadcrumbs([
        { to: '/', label: t('common.breadcrumbs.home') },
        { to: '/orders', label: t('orders.header') },
        { label: t('order.title', { id: order.id }) },
      ]);
    }
  }, [order, setBreadcrumbs, t]);

  return (
    <Loader isLoading={isFetching}>
      {order ? (
        <>
          <h1 className="page-title">{t('order.title', { id: order.id })}</h1>
          <OrderView order={order} />
        </>
      ) : null}
    </Loader>
  );
};

export default OrderPage;
