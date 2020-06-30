import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import Product from '../product';
import { CartContext } from '../../../contexts/cart';

import './styles.css';

const Products: React.FC = () => {
  const { products } = useContext(CartContext);
  const { t } = useTranslation();

  return (
    <table className="cart-products-list" cellSpacing="0">
      <colgroup>
        <col className="remove" />
        <col className="image" />
        <col className="name" />
        <col className="price" />
        <col className="quantity" />
        <col className="subtotal" />
      </colgroup>
      <thead>
        <tr>
          <th />
          <th />
          <th className="name">{t('cart.columns.name')}</th>
          <th>{t('cart.columns.price')}</th>
          <th>{t('cart.columns.quantity')}</th>
          <th>{t('cart.columns.total')}</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <Product key={product.product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
};

export default Products;
