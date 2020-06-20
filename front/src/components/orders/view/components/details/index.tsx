import React from 'react';
import { useTranslation } from 'react-i18next';

import { Order } from '../../../../../types/orders';
import { formatDate } from '../../../../../utils/common';

type Props = {
  order: Order;
};
const OrderDetails: React.FC<Props> = ({ order }) => {
  const { t } = useTranslation();

  return (
    <table>
      <tbody>
        <tr>
          <th>{t('orders.status')}:</th>
          <td>{t(`order.status.${order.status}`)}</td>
        </tr>
        <tr>
          <th>{t('orders.price')}:</th>
          <td>${order.price}</td>
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
