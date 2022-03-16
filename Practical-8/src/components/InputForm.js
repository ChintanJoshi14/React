import React from "react";
import style from "./InputForm.module.css";
import signup from "../images/signup.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";

const USER_VALUES = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  file: ""
};

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(null);
  }
  render() {
    //created validation object
    const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
    const validateInput = Yup.object({
      name: Yup.string()
        .max(15, "No. of characters allowed are 15 only")
        .required("Required"),
      email: Yup.string()
        .email("Please enter a valid email id")
        .required("Required"),
      phone: Yup.string()
        .max(10, "Number cannot be greater than 10 digits")
        .min(10, "Number must contain atleast 10 digits")
        .required("Required"),
      password: Yup.string()
        .max(15, "Enter a correct password")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "password not matching")
        .max(15, "Password does not match with above entered password")
        .required("Required"),
      file: Yup
          .mixed()
          .nullable()
          .required()
          .test(
            "FILE_SIZE",
            "Image size too big.",
            (value) => !value || (value && value.size <= 200000000)
          )
          .test(
            "FILE_FORMAT",
            "File type not supported.",
            (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
          ),
    });

    return (
      <Formik
        initialValues={{
          // image: "",
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          file: "",
        }}
        validationSchema={validateInput}
        onSubmit={(values) => {
          Object.assign(USER_VALUES, values);
        }}
      >
        {({ formik, values, setFieldValue }) => (
          <div>
            <div className={`${style.flex_design}`}>

              <Form>
                
                <div className={`${style.text_design}`}>SignUp</div>
                <div className={`${style.image_button}`}>
                  <input
                    ref={this.myRef}
                    hidden
                    type="file"
                    name="file"
                    onChange={(event) => {
                      setFieldValue("file", event.target.files[0]);
                    }}
                  ></input>
                  <div className={`${style.error_design}`}>
                  <ErrorMessage name="file" />
                </div>
                  <center>
                    <button type="button"
                      onClick={() => {
                        this.myRef.current.click();
                      }}
                    >
                      Photo +
                    </button>
                  </center>
                </div>

                {/* Name: */}
                <label htmlFor="name" className={`${style.label_design}`}>
                  Name
                </label>
                <Field
                  name="name"
                  type="text"
                  className={`${style.textfield_design}`}
                />
                <div className={`${style.error_design}`}>
                  <ErrorMessage name="name" />
                </div>

                {/* Email: */}
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  type="text"
                  className={`${style.textfield_design}`}
                />
                <div className={`${style.error_design}`}>
                  <ErrorMessage name="email" />
                </div>

                {/* Phone: */}
                <label htmlFor="phone">PhoneNo</label>
                <Field
                  name="phone"
                  type="digit"
                  className={`${style.textfield_design}`}
                />
                <div className={`${style.error_design}`}>
                  <ErrorMessage name="phone" />
                </div>

                {/* Password: */}
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  className={`${style.textfield_design}`}
                />
                <div className={`${style.error_design}`}>
                  <ErrorMessage name="password" />
                </div>

                {/* Confirm password: */}
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className={`${style.textfield_design}`}
                />
                <div className={`${style.error_design}`}>
                  <ErrorMessage name="confirmPassword" />
                </div>

                  {/* Submit and reset button */}
                <div className={`${style.button_design}`}>
                  <button className={`${style.submit}`} type="submit">
                    Submit
                  </button>
                  <button type="reset" className={`${style.reset}`}>
                    Reset
                  </button>
                </div>

              </Form>

              <div className={`${style.image_design}`}>
                <img src={signup} title="Image" alt="image not loaded"></img>
              </div>

            </div>
          </div>
        )}
      </Formik>
    );
  }
}

export default InputForm;
// connect(mapStateToProp, mapDispatchToProp)
