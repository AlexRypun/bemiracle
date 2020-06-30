import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PAYMENT_METHOD } from '../../../types/orders';
import RadioInput from '../../input/radio';

import './styles.css';

const PaymentMethods: React.FC = () => {
  const [method, setMethod] = useState<PAYMENT_METHOD>(PAYMENT_METHOD.ON_CARD);
  const onMethodChanged = useCallback((checkedMethod: PAYMENT_METHOD) => (): void => setMethod(checkedMethod), [
    setMethod,
  ]);

  const { t } = useTranslation();

  return (
    <ul className="payment-methods">
      <li>
        <RadioInput
          id="method-card"
          name="paymentMethod"
          value={PAYMENT_METHOD.ON_CARD}
          checked
          onChange={onMethodChanged(PAYMENT_METHOD.ON_CARD)}
          label={t(`paymentMethod.${PAYMENT_METHOD.ON_CARD}`)}
        />
        {PAYMENT_METHOD.ON_CARD === method && (
          <div className="method-details">
            <p>{t(`paymentMethod.helpText.${PAYMENT_METHOD.ON_CARD}`)}</p>
          </div>
        )}
      </li>
      <li>
        <RadioInput
          id="method-cash"
          name="paymentMethod"
          value={PAYMENT_METHOD.CASH}
          onChange={onMethodChanged(PAYMENT_METHOD.CASH)}
          label={t(`paymentMethod.${PAYMENT_METHOD.CASH}`)}
        />
        {PAYMENT_METHOD.CASH === method && (
          <div className="method-details">
            <p>{t(`paymentMethod.helpText.${PAYMENT_METHOD.CASH}`)}</p>
          </div>
        )}
      </li>
    </ul>
  );
};

export default PaymentMethods;
