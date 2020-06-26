import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import CategoriesList from '../categories-list';
import { Category, CategoryTranslation } from '../../../../../../types/categories';
import useEntityTranslation from '../../../../../../hooks/use-entity-translation';

type Props = {
  category: Category;
  setSubMenuTitle: (title: string) => void;
  setSubMenuContent: (content: React.ReactElement) => void;
};

const MenuCategoryItemMobile: React.FC<Props> = ({ category, setSubMenuContent, setSubMenuTitle }) => {
  const categoryTranslation = useEntityTranslation<CategoryTranslation>(category);

  const onClickHandler = useCallback((): void => {
    setSubMenuTitle(categoryTranslation.name);
    setSubMenuContent(<CategoriesList categories={category.children || []} />);
  }, [category, categoryTranslation, setSubMenuContent, setSubMenuTitle]);
  return (
    <li className="menu-item">
      {category.children && category.children.length > 0 && (
        <span className="akasha-menu-next-panel" onClick={onClickHandler} />
      )}
      <Link to={`/category/${category.id}`} className="akasha-menu-item-title">
        {categoryTranslation.name}
      </Link>
    </li>
  );
};

export default MenuCategoryItemMobile;
