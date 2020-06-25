import React, { useContext, useEffect } from 'react';

import './styles.css';
import { useTranslation } from 'react-i18next';
import { BreadcrumbsContext } from '../../contexts/breadcrumbs';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  const { setBreadcrumbs } = useContext(BreadcrumbsContext);
  useEffect(() => setBreadcrumbs([{ to: '/', label: t('common.breadcrumbs.home') }, { label: t('aboutUs.title') }]), [
    setBreadcrumbs,
    t,
  ]);

  return (
    <div className="about-us">
      <div className="image-block">
        <img src={require('../../../src/assets/images/about-img.jpg')} className="attachment-full size-full" />
      </div>
      <div className="text-block">
        <h4 className="title">Who we are </h4>
        <p className="desc">
          We believe in a world where you have total freedom to be you, without judgement. To experiment. To express
          yourself. To be brave and grab life as the extraordinary adventure it is. So we make sure everyone has an equal
          chance to discover all the amazing things they’re capable of – no matter who they are, where they’re from or
          what looks they like to boss.
        </p>
        <p>
          Our audience (AKA you) is wonderfully unique. And we do everything we can to help you find your fit, offering
          our Ciloe Brands in more than 30 sizes – and we’re committed to providing all sizes at the same price
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
