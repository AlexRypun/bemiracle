import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { OrderProduct as CartProduct } from '../../../types/orders';
import OrderProduct from '../order-product';

import './styles.css';

type Props = {
  products: CartProduct[];
};

const OrderProducts: React.FC<Props> = ({ products }) => {
  const total = useMemo(() => products.reduce((sum, product) => sum + product.price * product.quantity, 0), [products]);
  const { t } = useTranslation();

  return (
    <table className="order-table">
      <thead>
        <tr>
          <th>{t('checkout.products.columns.name')}</th>
          <th>{t('checkout.products.columns.total')}</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <OrderProduct key={product.product.id} product={product} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>{t('checkout.products.total')}</th>
          <td>${total}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default OrderProducts;
