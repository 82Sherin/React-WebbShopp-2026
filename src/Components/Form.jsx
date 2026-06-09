import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import Header from "../views/Header";
import Footer from "../views/Footer";
import { ShopContext } from "../context/ShopContext";
import "./Form.css";


// Validation schema using Yup
// Defines validation rules for each form field
const schema = yup.object().shape({

  // First name is required
  firstName: yup
    .string()
    .required("Your First Name is Required!"),

  // Last name is required
  lastName: yup
    .string()
    .required("Your Last Name is Required!"),

  // Email must be valid and required
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is Required!"),

  // Age must be a positive integer and at least 18
  age: yup
    .number()
    .positive()
    .integer()
    .min(18, "You must be at least 18")
    .required("Age is Required!"),

  // Password must contain between 4 and 10 characters
  password: yup
    .string()
    .min(4)
    .max(10)
    .required("Password is Required!"),

  // Confirm password must match password
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Passwords Don't Match"
    )
    .required("Please confirm your password"),
});


// Main form component
export const Form = () => {

  // Get total cart amount from global ShopContext
  const { getTotalCartAmount } = useContext(ShopContext);

  // State used to control modal visibility
  const [showModal, setShowModal] = useState(false);

  // State used to save submitted form data
  const [orderData, setOrderData] = useState(null);


  // React Hook Form setup
  // yupResolver connects Yup validation schema to the form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  });


  // Runs when form is submitted successfully
  const onSubmit = (data) => {

    // Save form data
    setOrderData(data);

    // Open confirmation modal
    setShowModal(true);
  };

  return (
    <>
      {/* Render page header */}
      <Header />

      <div className="form-container">

        {/* Page title */}
        <h1 className="form-title">Checkout</h1>

        <div className="form-card">

          {/* Form submission handled by React Hook Form */}
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* First name input */}
            <input
              type="text"
              placeholder="First Name..."
              {...register("firstName")}
            />

            {/* Validation error message */}
            <p className="form-error">
              {errors.firstName?.message}
            </p>


            {/* Last name input */}
            <input
              type="text"
              placeholder="Last Name..."
              {...register("lastName")}
            />

            {/* Validation error message */}
            <p className="form-error">
              {errors.lastName?.message}
            </p>


            {/* Email input */}
            <input
              type="text"
              placeholder="Email..."
              {...register("email")}
            />

            {/* Validation error message */}
            <p className="form-error">
              {errors.email?.message}
            </p>


            {/* Age input */}
            <input
              type="number"
              placeholder="Age..."
              {...register("age")}
            />

            {/* Validation error message */}
            <p className="form-error">
              {errors.age?.message}
            </p>


            {/* Password input */}
            <input
              type="password"
              placeholder="Password..."
              {...register("password")}
            />

            {/* Validation error message */}
            <p className="form-error">
              {errors.password?.message}
            </p>


            {/* Confirm password input */}
            <input
              type="password"
              placeholder="Confirm Password..."
              {...register("confirmPassword")}
            />

            {/* Validation error message */}
            <p className="form-error">
              {errors.confirmPassword?.message}
            </p>


            {/* Submit button */}
            <input
              type="submit"
              value="Place Order"
            />
          </form>
        </div>

        {/* Link back to cart page */}
        <Link
          to="/cart"
          className="form-back-link"
        >
          ← Back to Cart
        </Link>
      </div>


      {/* Conditional rendering:
          Only show modal when showModal is true
      */}
      {showModal && (

        <div className="modal-overlay">

          <div className="modal">

            {/* Confirmation message */}
            <h2 className="modal-title">
              Thank you for shopping with us!
            </h2>

            {/* Display customer name */}
            <p className="modal-name">
              {orderData?.firstName}
              {" "}
              {orderData?.lastName}
            </p>

            {/* Display total cart amount */}
            <p className="modal-total">
              Total:
              <span>
                ${getTotalCartAmount().toFixed(2)}
              </span>
            </p>

            {/* Button to return to homepage */}
            <Link
              to="/"
              className="modal-btn"

              // Close modal when button is clicked
              onClick={() => setShowModal(false)}
            >
              Back to Home
            </Link>
          </div>
        </div>
      )}

      {/* Render page footer */}
      <Footer />
    </>
  );
};

export default Form;