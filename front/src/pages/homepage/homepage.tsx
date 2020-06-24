import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Loader from '../../components/loader';
import useRequest from '../../hooks/use-request';
import { GetManyResponse } from '../../types/common';
import { Product } from '../../types/products';
import ProductsList from '../../components/products/list';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { isFetching, get } = useRequest({ endpoint: 'products/top' });
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await get<GetManyResponse<Product>>({
          take: 24,
        });
        const { data: products = [] } = response || {};
        setProducts(products);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [get]);

  const { t } = useTranslation();

  return (
    <div className="homepage">
      <h1 className="page-title">{t('home.title')}</h1>
      <Loader isLoading={isFetching}>
        <ProductsList products={products} />
      </Loader>
    </div>
  );
};

export default HomePage;
