import { z} from "zod";


export const signupSchema=z.object({
  fullName:z.string().min(3,"min 3 char"),
  email:z.string().email("please vaild email"),
  password:z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword:z.string(),
})

// First custom validation

// .refine() is a method. It takes 2 arguments:

// .refine(
//    validationFunction,
//    options
// )

// data value 
// {
//   fullName: "John",
//   email: "john@gmail.com",
//   password: "12345678",
//   confirmPassword: "12345678"
// }

.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })


  // Second custom validation
  .refine((data) => !data.email.includes("test"), {
    message: "Test emails are not allowed",
    path: ["email"],
  });