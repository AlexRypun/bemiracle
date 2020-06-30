import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Category } from '../../../../../../types/categories';
import useRequest from '../../../../../../hooks/use-request';

type Props = {
  renderMenuCategoryItem: (category: Category) => React.ReactElement;
};

const MenuItems: React.FC<Props> = ({ renderMenuCategoryItem }) => {
  const { t } = useTranslation();

  const [categories, setCategories] = useState<Category[]>([]);
  const { get } = useRequest({ endpoint: 'categories' });
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const categories = await get<Category[]>({ root: 1 });
      setCategories(categories);
    };
    fetchData();
  }, [get, setCategories]);

  return (
    <ul id="menu-primary-menu" className="clone-main-menu akasha-clone-mobile-menu akasha-nav main-menu">
      <li className="menu-item">
        <Link to="/">{t('menu.home')}</Link>
      </li>
      {categories.map(category => renderMenuCategoryItem(category))}
      <li className="menu-item">
        <Link to="/delivery">{t('menu.delivery')}</Link>
      </li>
    </ul>
  );
};

export default MenuItems;
