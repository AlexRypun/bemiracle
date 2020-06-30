import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import SignIn from '../../components/sign-in';
import { UserContext } from '../../contexts/user';

import './styles.css';

const SignInPage: React.FC = () => {
  const { user } = useContext(UserContext);
  const { t } = useTranslation();

  return user ? (
    <Redirect to="/" />
  ) : (
    <div className="login-page">
      <h2>{t('signIn.title')}</h2>
      <SignIn />
    </div>
  );
};

export default SignInPage;
