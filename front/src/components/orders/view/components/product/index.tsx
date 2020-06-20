import React from 'react';

import { OrderProduct } from '../../../../../types/orders';
import { getMainImgSrc } from '../../../../../utils/products';
import { IMG_SIZE, ProductTranslation } from '../../../../../types/products';
import useEntityTranslation from '../../../../../hooks/use-entity-translation';

type Props = {
  orderProduct: OrderProduct;
};
const OrderProductItem: React.FC<Props> = ({ orderProduct }) => {
  const translation = useEntityTranslation<ProductTranslation>(orderProduct.product);

  return (
    <tr key={orderProduct.id}>
      <td className="image">
        <img src={getMainImgSrc(orderProduct.product, IMG_SIZE.THUMBNAIL)} alt={translation.name} />
      </td>
      <td>
        {translation.name}&nbsp;
        <strong className="product-quantity">× {orderProduct.quantity}</strong>
      </td>
      <td>${orderProduct.price * orderProduct.quantity}</td>
    </tr>
  );
};

export default OrderProductItem;
