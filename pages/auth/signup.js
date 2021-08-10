import React, { useState } from "react";

export default function signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordconfirm, setPasswordConfirm] = useState("");
    const [togglevisibility, setToggleVisibility] = useState("password");

    function handleEmail(evt) {
        setEmail(evt.target.value);
    }

    function handlePassword(evt) {
        setPassword(evt.target.value);
    }

    function handlePasswordConfirm(evt) {
        setPasswordConfirm(evt.target.value);
        if (evt.target.value !== password) {
            evt.target.classList.add("is-invalid");
        } else {
            evt.target.classList.remove("is-invalid");
        }
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        if (!evt.target.checkValidity()) {
            return evt.target.classList.add("was-validated");
        }
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
        fetch("./api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((resRaw) => {
                if (!resRaw.ok) {
                    resRaw.text().then((res) => {
                        alert(res);
                    });
                } else {
                    alert("Sign up succeed");
                    window.location = "/";
                }
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h1 className="mt-4 text-center text-3x1 font-bold text-black-1000">Hello, Friend!</h1>
                    <p className="mt-4 text-center text-3x1 font-bold text-black-1000"> Enter your personal details and start journey with us</p> </div>
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up to your account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                name="email"
                                type="email"
                                autoComplete="email"
                                required ={true}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                onChange={handleEmail}
                                value={email}
                                feedback="Please provide a valid email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                name="password"
                                type={togglevisibility}
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={password}
                                onChange={handlePassword}
                                feedback="Please provide a valid password"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Confirm
                            </label>
                            <input
                                name="confirmpassword"
                                type={togglevisibility}
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Confirm Password"
                                value={passwordconfirm}
                                onChange={handlePasswordConfirm}
                                feedback="Password and confirm password does not match"
                            />
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

                            <button href="#" className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
                                Login
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}