import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Order } from '../../../types/orders';
import { BrowserContext } from '../../../contexts/browser';
import useFormat from '../../../hooks/use-format';

import './styles.css';

type Props = {
  order: Order;
};
const OrderTeaser: React.FC<Props> = ({ order }) => {
  const { isMobile } = useContext(BrowserContext);
  const { t } = useTranslation();
  const { formatDate, formatPrice } = useFormat();

  return (
    <tr className="order-teaser">
      <td>
        <Link to={`/orders/${order.id}`}>{t(`order.title${isMobile ? 'Short' : ''}`, { id: order.id })}</Link>
      </td>
      <td>{t(`order.status.${order.status}`)}</td>
      <td className="order-price">{formatPrice(order.price)}</td>
      <td className="payment-method">{t(`order.paymentMethod.${order.paymentMethod}`)}</td>
      <td>{formatDate(order.createdAt)}</td>
    </tr>
  );
};

export default OrderTeaser;
