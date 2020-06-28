import React, { SyntheticEvent, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Formik, Field } from 'formik';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';

import OrderProducts from '../../components/checkout/order-products';
import PaymentMethods from '../../components/checkout/payment-methods';
import Checkbox from '../../components/input/checkbox';
import FormikCheckbox from '../../components/input/formik-checkbox';
import Input from '../../components/input/formik-text';
import { Order, PAYMENT_METHOD } from '../../types/orders';
import { OrderSchema } from './validationSchemas';
import useRequest from '../../hooks/use-request';
import { CartContext } from '../../contexts/cart';
import Button from '../../components/button';
import { UserContext } from '../../contexts/user';
import { BreadcrumbsContext } from '../../contexts/breadcrumbs';
import Popup from '../../components/popup';
import { prepareObjectToFormik } from '../../utils/common';

import './styles.css';

const Checkout: React.FC = () => {
  const [termsPopupOpened, setTermsPopupOpened] = useState(false);

  const { products, clearCart } = useContext(CartContext);
  const { t } = useTranslation();
  const { setBreadcrumbs } = useContext(BreadcrumbsContext);
  useEffect(() => setBreadcrumbs([{ to: '/', label: t('common.breadcrumbs.home') }, { label: t('checkout.title') }]), [
    setBreadcrumbs,
    t,
  ]);

  const { create } = useRequest({ endpoint: 'orders' });

  const history = useHistory();

  useEffect(() => {
    if (products.length === 0) {
      history.replace('/');
    }
  }, [history, products]);

  const submitHandler = useCallback(
    async values => {
      try {
        const order = await create<Order>(values);
        clearCart();
        if (values.createAccount) {
          toast.success('User has been successfully created!');
        }
        toast.success('Order has been successfully created!');
        history.push(`/orders/${order.id}`);
      } catch (e) {
        toast.error(t('common.messages.smthWrong'));
      }
    },
    [clearCart, create, history, t],
  );

  const termsClickHandler = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      setTermsPopupOpened(true);
    },
    [setTermsPopupOpened],
  );

  const { user } = useContext(UserContext);

  const initialValues = useMemo(() => {
    return prepareObjectToFormik({
      customerName: user ? user.name : '',
      customerSurname: user ? user.surname : '',
      customerCity: user ? user.city : '',
      customerNovaPoshtaDep: user ? user.novaPoshtaDep : '',
      customerPhone: user ? user.phone : '',
      customerEmail: user ? user.email : '',
      createAccount: false,
      comments: '',
      paymentMethod: PAYMENT_METHOD.ON_CARD,
      agreePrivacyPolicy: false,
      password: '',
      repeatPassword: '',
      products,
    });
  }, [products, user]);

  return (
    <div className="checkout-page">
      <h1 className="page-title">{t('checkout.title')}</h1>
      {!user && (
        <div className="login-block">
          Returning customer?&nbsp;
          <Link to="/signin" className="login">
            Click here to login
          </Link>
        </div>
      )}
      <Formik initialValues={initialValues} onSubmit={submitHandler} validationSchema={OrderSchema}>
        {({ handleSubmit, values }): JSX.Element => (
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="customer-details">
              <div className="address">
                <div className="shipping">
                  <h3>Shipping details</h3>
                  <div className="shipping-fields">
                    <Input
                      id="shipping-name"
                      name="customerName"
                      wrapperClasses="form-row-first"
                      label="First name"
                      required
                    />
                    <Input
                      id="shipping-surname"
                      name="customerSurname"
                      wrapperClasses="form-row-last"
                      label="Last name"
                      required
                    />
                    <div className="clear" />
                    {values.createAccount && (
                      <>
                        <Input
                          id="password"
                          name="password"
                          label="Password"
                          type="password"
                          required
                          wrapperClasses="form-row-first"
                        />
                        <Input
                          id="repeatPassword"
                          name="repeatPassword"
                          label="Repeat password"
                          type="password"
                          required
                          wrapperClasses="form-row-last"
                        />
                        <div className="clear" />
                      </>
                    )}
                    <Input id="shipping-city" name="customerCity" label="City" required />
                    <Input
                      id="shipping-np"
                      name="customerNovaPoshtaDep"
                      label={
                        <>
                          {t('profile.npDep')} <span className="label-help-text">({t('profile.helpText.npDep')})</span>
                        </>
                      }
                      required
                    />
                    <Input
                      id="shipping-phone"
                      name="customerPhone"
                      label={
                        <>
                          {t('profile.phone')} <span className="label-help-text">({t('profile.helpText.phone')})</span>
                        </>
                      }
                      required
                    />
                    <Input
                      id="shipping-email"
                      name="customerEmail"
                      label="Email address"
                      required={values.createAccount}
                    />
                  </div>
                </div>
                {!user && (
                  <div className="account-fields">
                    <p className="form-row">
                      <Field
                        component={Checkbox}
                        id="createAccount"
                        name="createAccount"
                        label="Create an account?"
                        onChange={(): void => {}}
                      />
                    </p>
                  </div>
                )}
              </div>
              <div className="additional-info">
                <h3>Additional information</h3>
                <div className="additional-fields">
                  <p className="form-row">
                    <label htmlFor="order-comments">Order notes</label>
                    <Field
                      as="textarea"
                      name="comments"
                      id="order-comments"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                      rows={2}
                      cols={5}
                    />
                  </p>
                </div>
              </div>
            </div>
            <h3 className="order-review-header">Your order</h3>
            <div className="order-review">
              <OrderProducts products={products} />
              <div className="payment">
                <Field component="div" name="paymentMethods">
                  <PaymentMethods />
                </Field>
                <div className="form-row place-order">
                  <div className="terms-and-conditions">
                    <FormikCheckbox
                      id="agreePrivacyPolicy"
                      name="agreePrivacyPolicy"
                      label={
                        <>
                          I agree with the&nbsp;
                          <span onClick={termsClickHandler} className="terms-link">
                            privacy policy
                          </span>
                        </>
                      }
                      onChange={(): void => {}}
                    />
                  </div>
                  <Button label="Place order" type="submit" className="submit-order" />
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
      <Popup open={termsPopupOpened} onClose={(): void => setTermsPopupOpened(false)}>
        <h2 className="text-center">Terms & Conditions</h2>
        <p>
          - We save your personal data to process your order and to support your experience throughout this website.
        </p>
        <p>- We share your personal data with delivery services and/or payment systems to process your order.</p>
      </Popup>
    </div>
  );
};

export default Checkout;
