import * as yup from "yup";

export const orderCreateValidationSchema = yup.object().shape({
  total_value: yup.number().required(),
  client_name: yup.string().required(),
  client_city: yup.string().required(),
  client_address: yup.string().required(),
  client_phone: yup.string().required(),
});

export const orderUpdateValidationSchema = yup.object().shape({
  total_value: yup.number().required(),
  client_name: yup.string().required(),
  client_city: yup.string().required(),
  client_address: yup.string().required(),
  client_phone: yup.string().required(),
});

export const orderViewValidationSchema = yup.object().shape({
  id: yup.number().required(),
});

export const orderDeleteValidationSchema = yup.object().shape({
  id: yup.number().required(),
});
