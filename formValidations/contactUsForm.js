import * as Yup from "yup";

export const contactUsSchema = Yup.object().shape({
  First_Name: Yup.string().required("First Name is required"),
  Last_Name: Yup.string().required("Last Name is required"),
  Email_Address: Yup.string()
    .email("Invalid email address")
    .required("Email Address is required"),
  Company_Name: Yup.string(),
  Phone: Yup.string().required("Phone number is required"),
  Job_Role: Yup.string(),
  Help_With: Yup.array().min(1, "Select at least one option"),
  Message: Yup.string().required("Additional detail is required"),
});
