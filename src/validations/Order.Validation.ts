import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
    total_value: yup.number().required(),
    client_name: yup.string().required(),
    client_city: yup.string().required(),
    client_address: yup.string().required(),
    client_phone: yup.string().required(),
});