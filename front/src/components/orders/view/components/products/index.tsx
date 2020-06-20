import React from 'react';

import { Order } from '../../../../../types/orders';
import OrderProductItem from '../product';

type Props = {
  order: Order;
};
const OrderProducts: React.FC<Props> = ({ order }) => {
  return (
    <table>
      <tbody>
        {order.products.map(orderProduct => (
          <OrderProductItem key={orderProduct.id} orderProduct={orderProduct} />
        ))}
      </tbody>
    </table>
  );
};

export default OrderProducts;
