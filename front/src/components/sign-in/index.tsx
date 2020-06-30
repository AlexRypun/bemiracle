import React, { useCallback, useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import Input from '../../components/input/formik-text';
import { SignInSchema } from './validationSchemas';
import Button from '../button';
import useRequest from '../../hooks/use-request';
import { AuthTokens } from '../../types/common';
import { setTokens, decodeJWTToken } from '../../services/auth';
import { UserContext } from '../../contexts/user';

import './styles.css';

const SignIn: React.FC = () => {
  const { setUser } = useContext(UserContext);
  const { t } = useTranslation();

  const initialValues = useMemo(
    () => ({
      email: '',
      password: '',
    }),
    [],
  );

  const { create } = useRequest({ endpoint: 'auth/signin' });

  const submitHandler = useCallback(
    async values => {
      try {
        const tokens = await create<AuthTokens>(values);
        setTokens(tokens);
        const user = decodeJWTToken(tokens.accessToken);
        if (user) {
          toast.success(t('signIn.messages.hiUser', { name: `${user.name} ${user.surname}` }));
          setUser(user);
        }
      } catch (e) {
        toast.error(t('signIn.messages.wrongCred'));
      }
    },
    [create, setUser, t],
  );

  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler} validationSchema={SignInSchema}>
      {({ handleSubmit }): JSX.Element => (
        <form className="login-form" onSubmit={handleSubmit}>
          <Input id="email" name="email" label={t('signIn.email')} required />
          <Input id="password" name="password" label={t('signIn.password')} type="password" required />
          <p className="buttons">
            <Button label={t('signIn.signIn')} type="submit" className="login-button" />
            <span className="lost-password hidden">
              <Link to="resetpassword">{t('signIn.lostPassword')}</Link>
            </span>
          </p>
        </form>
      )}
    </Formik>
  );
};

export default SignIn;
