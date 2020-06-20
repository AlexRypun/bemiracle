import React from 'react';
import { useTranslation } from 'react-i18next';

import { Order } from '../../../../../types/orders';

type Props = {
  order: Order;
};
const OrderShippingDetails: React.FC<Props> = ({ order }) => {
  const { t } = useTranslation();

  return (
    <table>
      <tbody>
        <tr>
          <th>{t('order.shippingDetails.name')}:</th>
          <td>{order.customerName}</td>
        </tr>
        <tr>
          <th>{t('order.shippingDetails.surname')}:</th>
          <td>{order.customerSurname}</td>
        </tr>
        <tr>
          <th>{t('order.shippingDetails.city')}:</th>
          <td>{order.customerCity}</td>
        </tr>
        <tr>
          <th>{t('order.shippingDetails.npDep')}:</th>
          <td>{order.customerNovaPoshtaDep}</td>
        </tr>
        <tr>
          <th>{t('order.shippingDetails.phone')}:</th>
          <td>{order.customerPhone}</td>
        </tr>
        <tr>
          <th>{t('order.shippingDetails.email')}:</th>
          <td>{order.customerEmail}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderShippingDetails;
