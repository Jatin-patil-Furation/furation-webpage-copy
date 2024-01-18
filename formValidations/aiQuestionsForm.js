import * as Yup from "yup";

export const aiQuestionsForm = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email Address is Required"),
  message: Yup.string(),
});
