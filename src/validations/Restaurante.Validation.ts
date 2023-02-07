import * as yup from 'yup';

export const restaurantValidationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    category: yup.string().required(),
    city: yup.string().required(),
    address: yup.string().required(),
    phone: yup.string().required(),
});