import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Header from "./views/Header";
import Footer from "./views/Footer";
import "./Form.css";

const schema = yup.object().shape({ // lowercase object(), not Object()
  firstName: yup.string().required("Your First Name is Required!"),
  lastName: yup.string().required("Your Last Name is Required!"),
  email: yup.string().email("Invalid email").required("Email is Required!"),
  age: yup.number().positive().integer().min(18, "You must be at least 18").required("Age is Required!"),
  password: yup.string().min(4).max(10).required("Password is Required!"),
  confirmPassword: yup.string()
    .oneOf([yup.ref("password"), null], "Passwords Don't Match")
    .required("Please confirm your password"),
});

export const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema), 
  });

  const onSubmit = (data) => {
    console.log(data); 
  };

  return (
    <>
      <Header />
      <div className="form-container">
        <h1 className="form-title">Checkout</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="First Name..." {...register("firstName")} />
          <p className="form-error">{errors.firstName?.message}</p>

          <input type="text" placeholder="Last Name..." {...register("lastName")} />
          <p className="form-error">{errors.lastName?.message}</p>

          <input type="text" placeholder="Email..." {...register("email")} />
          <p className="form-error">{errors.email?.message}</p>

          <input type="number" placeholder="Age..." {...register("age")} />
          <p className="form-error">{errors.age?.message}</p>

          <input type="password" placeholder="Password..." {...register("password")} />
          <p className="form-error">{errors.password?.message}</p>

          <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")} /> 
          <p className="form-error">{errors.confirmPassword?.message}</p>

          <input type="submit" value="Place Order" />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Form;