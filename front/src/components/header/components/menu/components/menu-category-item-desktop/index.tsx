import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CategoriesList from '../categories-list';
import { Category, CategoryTranslation } from '../../../../../../types/categories';
import useEntityTranslation from '../../../../../../hooks/use-entity-translation';
import useHistoryState from '../../../../../../hooks/use-history-state';

type Props = {
  category: Category;
};

const MenuCategoryItemDesktop: React.FC<Props> = ({ category }) => {
  const [showSubCategories, setShowSubCategories] = useState(false);
  const categoryTranslation = useEntityTranslation<CategoryTranslation>(category);

  const history = useHistoryState();
  useEffect(() => setShowSubCategories(false), [history.locationKey]);

  const onMouseHandler = useCallback(
    (show: boolean) => (): void => {
      if (!show || (category.children && category.children.length > 0)) {
        setShowSubCategories(show);
      }
    },
    [category],
  );
  return (
    <li className="menu-item" onMouseEnter={onMouseHandler(true)} onMouseLeave={onMouseHandler(false)}>
      <Link to={`/category/${category.id}`}>{categoryTranslation.name}</Link>
      {showSubCategories && <CategoriesList categories={category.children || []} />}
    </li>
  );
};

export default MenuCategoryItemDesktop;
