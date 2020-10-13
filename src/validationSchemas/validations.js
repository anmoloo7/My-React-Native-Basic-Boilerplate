import * as yup from 'yup';

export default {
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .min(4)
        .required(),
}