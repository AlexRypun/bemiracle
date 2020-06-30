import React, { useCallback, useContext, useMemo } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Formik } from 'formik';

import { UserContext } from '../../contexts/user';
import useRequest from '../../hooks/use-request';
import { SignUpSchema } from './validationSchemas';
import Input from '../../components/input/formik-text';
import Button from '../../components/button';
import { User } from '../../types/users';
import { extractFieldErrors } from '../../utils/common';

import './styles.css';

const SignUpPage: React.FC = () => {
  const { user } = useContext(UserContext);
  const { t } = useTranslation();
  const history = useHistory();

  const initialValues = useMemo(
    () => ({
      name: '',
      surname: '',
      email: '',
      password: '',
      repeatPassword: '',
      phone: '+380',
      city: '',
      novaPoshtaDep: '',
    }),
    [],
  );

  const { create } = useRequest({ endpoint: 'auth/signup' });

  const submitHandler = useCallback(
    async (values, { setFieldError }) => {
      try {
        await create<User>(values);
        toast.success(t('signUp.messages.success'));
        history.push('/');
      } catch (e) {
        let showGeneralError = true;
        const fieldErrors = extractFieldErrors(e);
        Object.entries(fieldErrors).forEach(([field, message]) => {
          setFieldError(field, message);
          showGeneralError = false;
        });
        if (showGeneralError) {
          toast.error(t('common.messages.smthWrong'));
        }
      }
    },
    [create, history, t],
  );

  return user ? (
    <Redirect to="/" />
  ) : (
    <div className="registration-page">
      <h2>{t('signUp.title')}</h2>
      <Formik initialValues={initialValues} onSubmit={submitHandler} validationSchema={SignUpSchema}>
        {({ handleSubmit }): JSX.Element => (
          <form className="registration-form" onSubmit={handleSubmit}>
            <Input id="name" name="name" label={t('signUp.name')} required wrapperClasses="form-row-first" />
            <Input id="surname" name="surname" label={t('signUp.surname')} required wrapperClasses="form-row-last" />
            <div className="clear" />
            <Input
              id="password"
              name="password"
              label={t('signUp.password')}
              type="password"
              required
              wrapperClasses="form-row-first"
            />
            <Input
              id="repeatPassword"
              name="repeatPassword"
              label={t('signUp.repeatPassword')}
              type="password"
              required
              wrapperClasses="form-row-last"
            />
            <div className="clear" />
            <Input id="email" name="email" label={t('signUp.email')} required wrapperClasses="form-row-first" />
            <Input
              id="phone"
              name="phone"
              label={
                <>
                  {t('signUp.phone')}
                  &nbsp;
                  <span className="label-help-text">({t('signUp.helpText.phone')})</span>
                </>
              }
              wrapperClasses="form-row-last"
            />
            <div className="clear" />
            <Input id="city" name="city" label={t('signUp.city')} wrapperClasses="form-row-first" />
            <Input
              id="novaPoshtaDep"
              name="novaPoshtaDep"
              label={
                <>
                  {t('signUp.npDep')}
                  &nbsp;
                  <span className="label-help-text">({t('signUp.helpText.npDep')})</span>
                </>
              }
              wrapperClasses="form-row-last"
            />
            <p className="buttons">
              <Button label={t('signUp.register')} type="submit" className="registration-button" />
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpPage;
