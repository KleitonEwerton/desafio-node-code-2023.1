import * as yup from "yup";

export const productCreateValadationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  quantity: yup.number().required(),
  price: yup.number().required(),
  category: yup.string().required(),
});

export const productUpdateValadationSchema = yup.object().shape({
  name: yup.string(),
  description: yup.string(),
  quantity: yup.number(),
  price: yup.number(),
  category: yup.string(),
});

export const productViewValadationSchema = yup.object().shape({
  id: yup.number().required(),
});

export const productDeleteValadationSchema = yup.object().shape({
  id: yup.number().required(),
});
