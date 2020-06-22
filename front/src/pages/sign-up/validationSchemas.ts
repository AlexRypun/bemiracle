import * as Yup from 'yup';

import { ProfileSchema } from '../profile/validationSchemas';

export const SignUpSchema = ProfileSchema.shape({
  password: Yup.string().min(6, 'Too short').max(50, 'Too Long!').required('Required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Not equal to password')
    .required('Required'),
});
