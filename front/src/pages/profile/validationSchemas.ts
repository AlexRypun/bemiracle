import * as Yup from 'yup';

export const ProfileSchema = Yup.object().shape({
  name: Yup.string().max(50, 'Too Long!').required('Required'),
  surname: Yup.string().max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string()
    .nullable()
    .matches(/^\+\d{12}$/, 'Enter real mobile number'),
  city: Yup.string().nullable().max(50, 'Too Long!'),
  novaPoshtaDep: Yup.number().nullable().typeError('Must be a number'),
});
