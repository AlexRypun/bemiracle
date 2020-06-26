import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import LanguageDropdown from './components/language-dropdown';
import UserMenuDropdown from './components/user-menu-dropdown';
import CartIcon from './components/cart-icon';
import { BrowserContext } from '../../contexts/browser';
import useHistoryState from '../../hooks/use-history-state';
import MenuDesktop from './components/menu/desktop';
import MenuMobile from './components/menu/mobile';

import './styles.css';

const Header: React.FC = () => {
  const { isMobile } = useContext(BrowserContext);

  const [mobileMenuOpened, setMobileMenuOpened] = useState<boolean>(false);

  const history = useHistoryState();
  useEffect(() => {
    setMobileMenuOpened(false);
  }, [history.locationKey]);

  return (
    <header id="header" className="header style-02 header-dark">
      {!isMobile ? (
        <div className="header-wrap-stick">
          <div className="header-position">
            <div className="header-middle">
              <div className="akasha-menu-wapper" />
              <div className="header-middle-inner">
                <div className="header-logo-nav">
                  <div className="header-logo">
                    <Link to="/">
                      <Logo />
                    </Link>
                  </div>
                  <div className="box-header-nav menu-nocenter">
                    <MenuDesktop />
                  </div>
                </div>
                <div className="header-control">
                  <div className="header-control-inner">
                    <div className="meta-dreaming">
                      <ul className="wpml-menu">
                        <li className="menu-item akasha-dropdown block-language">
                          <LanguageDropdown />
                        </li>
                      </ul>
                      <div className="akasha-dropdown-close hidden">x</div>
                      <div className="menu-item block-user block-dreaming akasha-dropdown">
                        <UserMenuDropdown />
                      </div>
                      <CartIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="header-mobile">
            <div className="header-mobile-left">
              <div className="block-menu-bar">
                <span className="menu-bar menu-toggle" onClick={(): void => setMobileMenuOpened(true)}>
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <ul className="wpml-menu left-menu">
                <li className="menu-item akasha-dropdown block-language">
                  <LanguageDropdown />
                </li>
              </ul>
            </div>
            <div className="header-mobile-mid">
              <div className="header-logo">
                <Link to="/">
                  <Logo />
                </Link>
              </div>
            </div>
            <div className="header-mobile-right">
              <div className="header-control-inner">
                <div className="meta-dreaming">
                  <div className="menu-item block-user block-dreaming akasha-dropdown">
                    <UserMenuDropdown />
                  </div>
                  <CartIcon />
                </div>
              </div>
            </div>
          </div>
          <MenuMobile opened={mobileMenuOpened} setOpened={setMobileMenuOpened} />
        </>
      )}
    </header>
  );
};

export default Header;
