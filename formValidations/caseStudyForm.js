import * as Yup from "yup";

export const caseStudySchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email Address is Required"),
});
