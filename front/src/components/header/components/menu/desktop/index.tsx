import React from 'react';

import MenuItems from '../components/menu-items';
import { Category } from '../../../../../types/categories';
import MenuCategoryItemDesktop from '../components/menu-category-item-desktop';

const MenuDesktop: React.FC = () => {
  return (
    <MenuItems
      renderMenuCategoryItem={(category: Category): React.ReactElement => <MenuCategoryItemDesktop key={category.id} category={category} />}
    />
  );
};

export default MenuDesktop;
