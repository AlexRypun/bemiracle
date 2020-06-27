import React from 'react';
import { Field, useField } from 'formik';

import Checkbox from '../checkbox';

type Props = {
  id: string;
  name: string;
  onChange: (value: string) => void;
  checked?: boolean;
  label?: React.ReactNode | string;
};

const FormikCheckbox: React.FC<Props> = props => {
  const [, { touched, error }] = useField(props.name);

  return (
    <div className="form-field">
      <Field component={Checkbox} {...props} className={error && touched ? 'error' : ''} />
      {error && touched ? <p className="field-error">{error}</p> : null}
    </div>
  );
};

export default FormikCheckbox;
