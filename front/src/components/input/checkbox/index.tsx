import React, { ChangeEvent, useCallback } from 'react';
import { FieldInputProps } from 'formik';

import './styles.css';

type Props = {
  id: string;
  name: string;
  value: string | number;
  onChange: (value: string) => void;
  checked?: boolean;
  label?: React.ReactNode | string;
  field?: FieldInputProps<string>;
  className?: string;
};
const Checkbox: React.FC<Props> = ({ id, name, value, onChange, checked = false, label, field, className }) => {
  const changeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (field && field.onChange) {
        field.onChange(e);
      }
      onChange(e.target.value);
    },
    [field, onChange],
  );

  return (
    <label className={`input-checkbox-label ${className || ''}`}>
      <input
        id={id}
        name={name}
        type="checkbox"
        value={value}
        defaultChecked={checked}
        className="input-checkbox"
        {...field}
        onChange={changeHandler}
      />
      <span className="label">{label}</span>
    </label>
  );
};

export default Checkbox;
