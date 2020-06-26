import React, { useCallback, useEffect, useRef, useState } from 'react';

import MenuItems from '../components/menu-items';
import { Category } from '../../../../../types/categories';
import MenuCategoryItemMobile from '../components/menu-category-item-mobile';
import useDetectClick from '../../../../../hooks/use-detect-click';

type Props = {
  opened: boolean;
  setOpened: (opened: boolean) => void;
};

const MenuMobile: React.FC<Props> = ({ opened, setOpened }) => {
  const [subMenuHidden, setSubMenuHidden] = useState(true);
  const [subMenuTitle, setSubMenuTitle] = useState<string | null>(null);
  const [subMenuContent, setSubMenuContent] = useState<React.ReactElement | null>(null);

  const ref = useRef(null);

  useEffect(() => {
    if (subMenuHidden) {
      setSubMenuTitle(null);
      setTimeout(() => setSubMenuContent(null), 200);
    }
  }, [subMenuHidden]);

  useEffect(() => {
    if (subMenuContent) {
      setSubMenuHidden(false);
    }
  }, [subMenuContent]);

  const closeMobileMenu = useCallback(() => {
    if (opened) {
      setOpened(false);
    }
  }, [opened, setOpened]);
  useDetectClick({
    ref,
    onClickOutside: closeMobileMenu,
  });

  return (
    <div ref={ref} id="mobile-menu" className={`akasha-menu-clone-wrap ${opened ? 'open' : ''}`}>
      <div className="akasha-menu-panels-actions-wrap">
        {subMenuContent ? (
          <span className="akasha-menu-prev-panel" onClick={(): void => setSubMenuHidden(true)} />
        ) : null}
        <span className="akasha-menu-current-panel-title">{subMenuTitle}</span>
        <span className="akasha-menu-close-btn akasha-menu-close-panels" onClick={(): void => setOpened(false)}>
          x
        </span>
      </div>
      <div className="akasha-menu-panels">
        <div className="akasha-menu-panel akasha-menu-panel-main">
          <MenuItems
            renderMenuCategoryItem={(category: Category): React.ReactElement => (
              <MenuCategoryItemMobile
                key={category.id}
                category={category}
                setSubMenuContent={setSubMenuContent}
                setSubMenuTitle={setSubMenuTitle}
              />
            )}
          />
        </div>
        <div
          className={`akasha-menu-panel akasha-menu-sub-panel ${
            subMenuHidden ? 'akasha-menu-hidden' : 'akasha-menu-panel-opened'
          }`}
        >
          {subMenuContent}
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
