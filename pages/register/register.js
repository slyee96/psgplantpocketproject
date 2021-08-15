import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { useCallback } from "next/router";

export default function Register({
    email = "",
    password = "",
    confirmpassword = "",
}) {
    const [isLoading, setIsLoading] = useState(false);
    const [registerData, setRegisterData] = useState({
        email,
        password,
        confirmpassword,
    });

   
    const formik = useFormik({
        initialValues: registerData,
        enableReinitialize: true,
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email")
                .required("Email is Required"),
            password: Yup.string().required("Password is required"),
            confirmpassword: Yup.string().oneOf(
                [Yup.ref("password"), null],
                "Both password need to be the same"
            )
        }),
        
        onSubmit: async (values) => {
            setIsLoading(true);
            await fetch("/api/auth/registerapi", {
                method: "POST",
                body: JSON.stringify(user)
            });

            setIsLoading(false);
            router.push("/register");[router]
        },
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h1 className="mt-4 text-center text-3x1 font-bold text-black-1000">Hello, Friend!</h1>
                    <p className="mt-4 text-center text-3x1 font-bold text-black-1000"> Enter your personal details and start journey with us</p> </div>
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up to your account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                type="text"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                placeholder="Email"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <p className="text-sm text-red-400">{formik.errors.email}</p>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                className="form-control"
                                placeholder="Password"
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <p className="text-sm text-red-400">{formik.errors.password}</p>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Confirm Password
                            </label>
                            <input
                                disabled={isLoading}
                                type="password"
                                name="confirmpassword"
                                onChange={formik.handleChange}
                                placeholder="Confirm Password"
                            />
                            {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
                                <p className="text-sm text-red-400">{formik.errors.confirmpassword}</p>
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
            </div>
        </div>
    );
};
