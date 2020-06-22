import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { toast } from 'react-toastify';

import { ProfileSchema } from './validationSchemas';
import Input from '../../components/input/formik-text';
import Button from '../../components/button';
import useRequest from '../../hooks/use-request';
import { UserContext } from '../../contexts/user';
import { User } from '../../types/users';
import { refreshTokens } from '../../services/auth';
import { prepareObjectToFormik } from '../../utils/common';

import './styles.css';
import { BreadcrumbsContext } from '../../contexts/breadcrumbs';

const ProfilePage: React.FC = () => {
  const { user } = useContext(UserContext);
  const { t } = useTranslation();
  const { update } = useRequest({ endpoint: `users/${user?.id}` });

  const [blockButton, setBlockButton] = useState(false);

  const initialValues = useMemo(() => prepareObjectToFormik(user || {}), [user]);

  const submitHandler = useCallback(
    async values => {
      if (!blockButton) {
        try {
          setBlockButton(true);
          await update<User>(values);
          await refreshTokens();
          toast.success(t('saved'));
        } catch (e) {
          toast.error(t('common.messages.smthWrong'));
        } finally {
          setBlockButton(false);
        }
      }
    },
    [blockButton, update, t],
  );

  const { setBreadcrumbs } = useContext(BreadcrumbsContext);
  useEffect(() => setBreadcrumbs([{ to: '/', label: t('common.breadcrumbs.home') }, { label: t('profile.title') }]), [
    setBreadcrumbs,
    t,
  ]);

  return (
    <div className="profile">
      <h1 className="page-title">{t('profile.title')}</h1>
      <Formik initialValues={initialValues} onSubmit={submitHandler} validationSchema={ProfileSchema}>
        {({ handleSubmit }): JSX.Element => (
          <form className="profile-form" onSubmit={handleSubmit}>
            <Input id="name" name="name" label={t('profile.name')} required wrapperClasses="form-row-first" />
            <Input id="surname" name="surname" label={t('profile.surname')} required wrapperClasses="form-row-last" />
            <div className="clear" />
            <Input id="email" name="email" label={t('profile.email')} required wrapperClasses="form-row-first" />
            <Input
              id="phone"
              name="phone"
              label={
                <>
                  {t('profile.phone')} <span className="label-help-text">({t('profile.helpText.phone')})</span>
                </>
              }
              wrapperClasses="form-row-last"
            />
            <div className="clear" />
            <Input id="city" name="city" label={t('profile.city')} wrapperClasses="form-row-first" />
            <Input
              id="novaPoshtaDep"
              name="novaPoshtaDep"
              label={
                <>
                  {t('profile.npDep')} <span className="label-help-text">({t('profile.helpText.npDep')})</span>
                </>
              }
              wrapperClasses="form-row-last"
            />
            <p className="buttons">
              <Button label={t('profile.save')} type="submit" disabled={blockButton} className="profile-button-save" />
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ProfilePage;
