import * as yup from 'yup';
import validations from './validations';

export const loginForm = yup.object().shape({
    email: validations.email,
    password: validations.password
});