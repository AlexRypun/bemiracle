import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Order } from '../../../types/orders';
import { formatDate } from '../../../utils/common';
import { BrowserContext } from '../../../contexts/browser';

import './styles.css';

type Props = {
  order: Order;
};
const OrderTeaser: React.FC<Props> = ({ order }) => {
  const { isMobile } = useContext(BrowserContext);
  const { t } = useTranslation();
  return (
    <tr>
      <td>
        <Link to={`/orders/${order.id}`}>{t(`order.title${isMobile ? 'Short' : ''}`, { id: order.id })}</Link>
      </td>
      <td>{t(`order.status.${order.status}`)}</td>
      <td>${order.price}</td>
      <td className="payment-method">{t(`order.paymentMethod.${order.paymentMethod}`)}</td>
      <td>{formatDate(order.createdAt)}</td>
    </tr>
  );
};

export default OrderTeaser;
