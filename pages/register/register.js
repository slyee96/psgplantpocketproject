import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import swal from "sweetalert";

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email")
        .required("Email is Required"),
    password: Yup.string().required("Password is required"),
    confirm_password: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Both password need to be the same"
    )
});

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alert: null
        };
    }


    submitForm = (values, history) => {
        axios
            .post("http://localhost:3000/register", values)
            .then(res => {
                console.log(res.data.result);
                if (res.data.result === "success") {
                    swal("Success!", res.data.message, "warning").then(value => {
                        history.push("/login");
                    });
                } else if (res.data.result === "error") {
                    swal("Error!", res.data.message, "error");
                }
            })
            .catch(error => {
                console.log(error);
                swal("Error!", "Unexpected error", "error");
            });
    };
    showForm = ({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        setFieldValue,
        isSubmitting
    }) => {
        return (
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            type="text"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            className={
                                errors.email && touched.email
                                    ? "form-control is-invalid"
                                    : "form-control"
                            }
                            placeholder="Email"
                        />
                        {errors.email && touched.email ? (
                            <small id="passwordHelp" class="text-danger">
                                {errors.email}
                            </small>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                            className="form-control"
                            placeholder="Password"
                            className={
                                errors.password && touched.password
                                    ? "form-control is-invalid"
                                    : "form-control"
                                    
                            }
                        />
                        {errors.password && touched.password ? (
                            <small id="passwordHelp" class="text-danger">
                                {errors.password}
                            </small>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirm_password"
                            onChange={handleChange}
                            className={
                                errors.confirmpassword && touched.confirmpassword
                                    ? "form-control is-invalid"
                                    : "form-control"
                            }
                            placeholder="Confirm Password"
                        />
                        {errors.confirmpassword && touched.confirmpassword ? (
                            <small id="passwordHelp" class="text-danger">
                                {errors.confirm_password}
                            </small>
                        ) : null}
                    </div>

                </div>
                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        </span>
                        Sign Up
                    </button>
                    <br></br>
                    <div className="text-sm text-center">
                        <a className="font-medium text-gray-600 hover:text-gray-500">
                            If you have an account, click...
                        </a>
                        <button onClick={() => {
                            this.props.history.push("/login");
                        }} className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
                            Login
                        </button>
                    </div>
                </div>
            </form>

        );
    };

    render() {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h1 className="mt-4 text-center text-3x1 font-bold text-black-1000">Hello, Friend!</h1>
                        <p className="mt-4 text-center text-3x1 font-bold text-black-1000"> Enter your personal details and start journey with us</p> </div>
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up to your account</h2>
                    </div>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                            confirmpassword: ""
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            this.submitForm(values, this.props.history);
                            setSubmitting(false);
                        }}
                        validationSchema={SignupSchema}
                    >
                        {props => this.showForm(props)}
                    </Formik>
                </div>
            </div>
        );
    }
}

export default Register;