import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import Header from "../views/Header";
import Footer from "../views/Footer";
import { ShopContext } from "../context/ShopContext";
import "./Form.css";

const schema = yup.object().shape({
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
  const { getTotalCartAmount } = useContext(ShopContext);
  const [showModal, setShowModal] = useState(false);
  const [orderData, setOrderData] = useState(null);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setOrderData(data); // save the form data to show in modal
    setShowModal(true); // show the modal
  };

  return (
    <>
      <Header />
      <div className="form-container">
        <h1 className="form-title">Checkout</h1>
        <div className="form-card">
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
        <Link to="/cart" className="form-back-link">← Back to Cart</Link>
      </div>

      {/* Modal — only renders when showModal is true */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 className="modal-title">Thank you for shopping with us!</h2>
            <p className="modal-name">
              {orderData?.firstName} {orderData?.lastName}
            </p>
            <p className="modal-total">
              Total: <span>${getTotalCartAmount().toFixed(2)}</span>
            </p>
            <Link to="/" className="modal-btn" onClick={() => setShowModal(false)}>
              Back to Home
            </Link>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Form;