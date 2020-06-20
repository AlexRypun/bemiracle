import React from 'react';
import { useTranslation } from 'react-i18next';

import { Order } from '../../../types/orders';
import { useEntitiesTranslations } from '../../../hooks/use-entity-translation';
import { Product, ProductTranslation } from '../../../types/products';
import OrderDetails from './components/details';
import OrderProducts from './components/products';
import OrderShippingDetails from './components/shipping-details';

import './styles.css';

type Props = {
  order: Order;
};
const OrderView: React.FC<Props> = ({ order }) => {
  const { t } = useTranslation();

  const productsWithTranslations = useEntitiesTranslations<Product, ProductTranslation>(
    order.products.map(({ product }) => product),
  );
  const productsById: { [id: string]: Product & { currentTranslation: ProductTranslation } } = {};
  productsWithTranslations.forEach(product => {
    productsById[product.id] = product;
  });

  return (
    <div className="order-view">
      <div className="details block">
        <h3>{t('order.detailsTitle')}</h3>
        <OrderDetails order={order} />
      </div>
      <div className="products block">
        <h3>{t('order.productsTitle')}</h3>
        <OrderProducts order={order} />
      </div>
      <div className="shipping-info block">
        <h3>{t('order.shippingTitle')}</h3>
        <OrderShippingDetails order={order} />
      </div>
    </div>
  );
};

export default OrderView;
