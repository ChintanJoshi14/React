import React from "react";
import "./InputForm.css";
import TextField from "./TextField";
import signup from "../images/signup.png";
import UploadPhoto from "./UploadPhoto";
import { Formik, Form } from "formik";
import * as Yup from "yup";

class InputForm extends React.Component {
  
  render() {
    const validateInput = Yup.object({
        name: Yup.string()
          .max(15, "No. of characters allowed are 15 only")
          .required("Required"),
        email: Yup.string()
          .max(15, "Please enter a valid Email")
          .required("Required"),
        phone: Yup.number()
          .max(10, "Number cannot be greater than 10 digits")
          .min(10, "Number must contain atleat 10 digits")
          .required("Required"),
        password: Yup.string()
          .max(15, "Enter a correct password")
          .required("Required"),
        confirmPassword: Yup.string()
          .max(15, "Password does not match with above entered password")
          .required("Required"),
      });
    
    return (
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validateInput}
      >
        {(formik) => (
          <div className="flex-layout">
            <div className="signup-form-layout">
              <div className="text-layout">Signup</div>
              {/* {console.log(formik.values)} */}
              <Form>
                <UploadPhoto />
                {/* <div>Name</div> */}
                <TextField label="Name" name="name" />
                {/* <div>Email</div> */}
                <TextField label="Email" name="email" />
                {/* <div>Phone</div> */}
                <TextField label="PhoneNo" name="phone" />
                {/* <div>Password</div> */}
                <TextField label="Password" name="password" />
                {/* <div>Confirm Password</div> */}
                <TextField label="Confirm Password" name="confirmPassword" />
                <div className="button-layout">
                  <button className="submit">Submit</button>
                  <button className="reset">Reset</button>
                </div>
              </Form>
            </div>

            <div className="image-layout">
              <img src={signup} title="Image" alt="image not loaded"></img>
            </div>
          </div>
        )}
      </Formik>
    );
  }
}

export default InputForm;
