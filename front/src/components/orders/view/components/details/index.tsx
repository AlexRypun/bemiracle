import React from 'react';
import { useTranslation } from 'react-i18next';

import { Order } from '../../../../../types/orders';
import useFormat from '../../../../../hooks/use-format';

type Props = {
  order: Order;
};
const OrderDetails: React.FC<Props> = ({ order }) => {
  const { t } = useTranslation();
  const { formatDate, formatPrice } = useFormat();

  return (
    <table>
      <tbody>
        <tr>
          <th>{t('orders.status')}:</th>
          <td>{t(`order.status.${order.status}`)}</td>
        </tr>
        <tr>
          <th>{t('orders.price')}:</th>
          <td>{formatPrice(order.price)}</td>
        </tr>
        <tr>
          <th>{t('orders.paymentMethod')}:</th>
          <td>{t(`order.paymentMethod.${order.paymentMethod}`)}</td>
        </tr>
        <tr>
          <th>{t('orders.createdDate')}:</th>
          <td>{formatDate(order.createdAt)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderDetails;
