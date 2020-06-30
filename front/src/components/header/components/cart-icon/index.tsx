import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  MouseEvent,
  useMemo,
  SyntheticEvent,
} from 'react';
import { Link } from 'react-router-dom';

import Canvas from '../../../canvas';
import useDetectClick from '../../../../hooks/use-detect-click';
import CartItem from './components/cart-item';
import useHistoryState from '../../../../hooks/use-history-state';
import { CartContext } from '../../../../contexts/cart';
import useFormat from '../../../../hooks/use-format';

import './styles.css';
import { useTranslation } from 'react-i18next';

const CartIcon: React.FC = () => {
  const { products, removeFromCart } = useContext(CartContext);
  const total = useMemo(() => products.reduce((sum, product) => sum + product.price * product.quantity, 0), [products]);

  const removeFromCartHandler = useCallback(
    (productId: number) => (e: MouseEvent): void => {
      e.nativeEvent.stopImmediatePropagation();
      removeFromCart(productId);
    },
    [removeFromCart],
  );

  const [opened, setOpened] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeCartCanvas = useCallback(() => {
    if (opened) {
      setOpened(false);
    }
  }, [opened]);
  useDetectClick({
    ref,
    onClickOutside: closeCartCanvas,
  });
  const history = useHistoryState();
  useEffect(() => setOpened(false), [history.locationKey]);

  const { formatPrice } = useFormat();

  const toCheckoutHandler = useCallback(
    (e: SyntheticEvent): void => {
      if (products.length === 0) {
        e.preventDefault();
      }
    },
    [products],
  );

  const { t } = useTranslation();

  return (
    <div className="block-minicart block-dreaming akasha-mini-cart akasha-dropdown cart-icon">
      <div className="shopcart-dropdown block-cart-link" onClick={(): void => setOpened(true)}>
        <span className="icon">
          <span className="flaticon-bag" />
          <span className="count">{products.length}</span>
        </span>
      </div>
      <Canvas opened={opened}>
        <div ref={ref} className="widget akasha widget_shopping_cart cart-canvas">
          <div className="widget_shopping_cart_content">
            <h3 className="minicart-title">
              {t('cartCanvas.title')}
              <span className="count">{products.length}</span>
            </h3>
            <ul className="akasha-mini-cart cart_list product_list_widget products-list">
              {products.map(product => (
                <CartItem key={product.product.id} product={product} removeFromCart={removeFromCartHandler} />
              ))}
            </ul>
            <p className="akasha-mini-cart__total total">
              <strong>{t('cartCanvas.total')}:</strong>
              <span className="akasha-Price-amount amount">{formatPrice(total)}</span>
            </p>
            <p className="akasha-mini-cart__buttons buttons">
              <Link to="/cart" className="button akasha-forward">
                {t('cartCanvas.toCart')}
              </Link>
              <Link
                to="/checkout"
                className={`button checkout akasha-forward ${products.length === 0 ? 'disabled' : ''}`}
                onClick={toCheckoutHandler}
              >
                {t('cartCanvas.toCheckout')}
              </Link>
            </p>
          </div>
        </div>
      </Canvas>
    </div>
  );
};
export default CartIcon;
