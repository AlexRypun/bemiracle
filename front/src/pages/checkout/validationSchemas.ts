import * as Yup from 'yup';

export const OrderSchema = Yup.object().shape({
  customerName: Yup.string().max(50, 'Too Long!').required('Required'),
  customerSurname: Yup.string().max(50, 'Too Long!').required('Required'),
  customerCity: Yup.string().max(50, 'Too Long!').required('Required'),
  customerNovaPoshtaDep: Yup.number().typeError('Must be a number').required('Required'),
  customerPhone: Yup.string()
    .matches(/^\+\d{12}$/, 'Enter real mobile number')
    .required('Required'),
  customerEmail: Yup.string()
    .email('Invalid email')
    .when('createAccount', {
      is: true,
      then: Yup.string().required('Required'),
    }),
  agreePrivacyPolicy: Yup.boolean().oneOf([true], 'Required'),
  createAccount: Yup.boolean(),
  password: Yup.string().when('createAccount', {
    is: true,
    then: Yup.string().min(6, 'Too short').max(50, 'Too Long!').required('Required'),
  }),
  repeatPassword: Yup.string().when('createAccount', {
    is: true,
    then: Yup.string()
      .oneOf([Yup.ref('password')], 'Not equal to password')
      .required('Required'),
  }),
});
