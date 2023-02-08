import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  "x-access-token": yup.string().required(),
});
