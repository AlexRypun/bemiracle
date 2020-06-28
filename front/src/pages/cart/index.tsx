import React, { useContext, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Products from '../../components/cart/products';
import { CartContext } from '../../contexts/cart';
import { BreadcrumbsContext } from '../../contexts/breadcrumbs';
import useFormat from '../../hooks/use-format';

import './styles.css';

const Cart: React.FC = () => {
  const { products } = useContext(CartContext);
  const total = useMemo(() => products.reduce((sum, product) => sum + product.price * product.quantity, 0), [products]);

  const { t } = useTranslation();
  const { setBreadcrumbs } = useContext(BreadcrumbsContext);
  useEffect(() => setBreadcrumbs([{ to: '/', label: t('common.breadcrumbs.home') }, { label: t('cart.title') }]), [
    setBreadcrumbs,
    t,
  ]);

  const { formatPrice } = useFormat();

  return (
    <div className="cart-page">
      <h1 className="page-title">{t('cart.title')}</h1>
      {products.length === 0 ? (
        <p className="no-data">The cart is empty</p>
      ) : (
        <>
          <Products />
          <div className="total">
            <h2>Cart totals</h2>
            <table cellSpacing="0">
              <tbody>
                <tr>
                  <th>Total</th>
                  <td>{formatPrice(total)}</td>
                </tr>
              </tbody>
            </table>
            <div className="to-checkout">
              <Link to="/checkout">Proceed to checkout</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
