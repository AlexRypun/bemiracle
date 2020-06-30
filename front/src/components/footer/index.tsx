import React from 'react';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';

import './styles.css';

const Index: React.FC = () => {
  // needed to re-render component, cause Trans doesn't cause re-rendering on language change
  useTranslation();

  return (
    <footer id="footer" className="footer style-01">
      <div className="section-010">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                <Trans i18nKey="footer.copyright" components={{ l: <Link to="/" /> }} />
              </p>
            </div>
            <div className="col-md-6">
              <div className="content-socials">
                <ul className="socials-list">
                  <li>
                    <a href="https://www.instagram.com/bemiracle.store" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-instagram"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Index;
