import React, { useContext, useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { BreadcrumbsContext } from '../../contexts/breadcrumbs';

import './styles.css';

const Delivery: React.FC = () => {
  const { t } = useTranslation();
  const { setBreadcrumbs } = useContext(BreadcrumbsContext);
  useEffect(() => setBreadcrumbs([{ to: '/', label: t('common.breadcrumbs.home') }, { label: t('delivery.title') }]), [
    setBreadcrumbs,
    t,
  ]);

  return (
    <div className="delivery-page">
      <div className="image-block">
        <img src={require('../../../src/assets/images/delivery-img.jpg')} className="attachment-full size-full" />
      </div>
      <div className="text-block">
        <h4 className="title">{t('delivery.title')}</h4>
        <Trans i18nKey="delivery.content" />
      </div>
    </div>
  );
};

export default Delivery;
