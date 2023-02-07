import * as yup from "yup";

export const restaurantCreateValidationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  category: yup.string().required(),
  city: yup.string().required(),
  address: yup.string().required(),
  phone: yup.string().required(),
});

export const restaurantUpdateValidationSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string(),
  password: yup.string(),
  category: yup.string(),
  city: yup.string(),
  address: yup.string(),
  phone: yup.string(),
});

export const restaurantViewValidationSchema = yup.object().shape({
  id: yup.number().required(),
});

export const restaurantDeleteValidationSchema = yup.object().shape({
  id: yup.number().required(),
});
