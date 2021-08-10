
import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Login() {
    const [session, loading] = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!loading && session) {
            router.push("/");
        }
    }, [loading, session]);

    if (!loading && !session) {
        return (
            <>
                {!session && (
                    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-md w-full space-y-8">
                            <div>
                                <h1 className="mt-4 text-center text-3x1 font-bold text-black-1000">Welcome!</h1>
                                <p className="mt-4 text-center text-3x1 font-bold text-black-1000"> Happy to see you again, login and have fun with us.</p> </div>
                            <div>
                                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login to your account</h2>
                            </div>
                            <form className="mt-8 space-y-6" action="#" method="POST">
                                <input type="hidden" name="remember" defaultValue="true" />
                                <div className="rounded-md shadow-sm -space-y-px">
                                    <div>
                                        <label htmlFor="email-address" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required={true}
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Email address"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="sr-only">
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required={true}
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Password"
                                        />
                                    </div>

                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="text-sm">
                                        <a href="#" className="font-medium text-gray-600 hover:text-gray-500">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        onClick={() => signIn("email")}
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        </span>
                                        Sign in
                                    </button>
                                    <br></br>
                                    <div className="text-sm text-center">
                                        <a className="font-medium text-gray-600 hover:text-gray-500">
                                            If you didnt have an account, click...
                                        </a>

                                        <button href="#" className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </>
        );
    } else {
        return null;
    }
}