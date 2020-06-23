import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { IMG_SIZE, Product, ProductTranslation } from '../../../types/products';
import { getMainImgSrc } from '../../../utils/products';
import { CartContext } from '../../../contexts/cart';
import useEntityTranslation from '../../../hooks/use-entity-translation';

import './styles.css';

type Props = {
  product: Product;
};
const ProductTeaser: React.FC<Props> = ({ product }) => {
  const { alreadyInCart, addToCart } = useContext(CartContext);
  const canAddToCart = useMemo(() => product.inStock - alreadyInCart(product.id) > 0, [
    product.id,
    product.inStock,
    alreadyInCart,
  ]);

  const translation = useEntityTranslation<ProductTranslation>(product);

  return (
    <li className="product-teaser col-bg-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-ts-6">
      <div className="product-teaser-inner">
        <div className="product-img">
          <Link to={`/products/${product.id}`}>
            <img
              className="img-responsive"
              src={getMainImgSrc(product, IMG_SIZE.TEASER)}
              alt={translation.name}
              width="600"
              height="778"
            />
          </Link>
          <div className="labels">
            {product.isTop && (
              <span className="top">
                <span>Top sales</span>
              </span>
            )}
            {product.isNew && (
              <span className="new">
                <span>New</span>
              </span>
            )}
            {product.inStock < 1 && (
              <span className="sold-out">
                <span>Sold out</span>
              </span>
            )}
          </div>
          <div className="group-button">
            {canAddToCart && (
              <div className="add-to-cart" onClick={(): void => addToCart(product, 1)}>
                <span className="add-to-cart-button" />
              </div>
            )}
          </div>
        </div>
        <div className="product-data">
          <h3 className="product-name">
            <Link to={`/products/${product.id}`}>{translation.name}</Link>
          </h3>
          <span className="price">${product.price}</span>
        </div>
      </div>
    </li>
  );
};

export default ProductTeaser;
