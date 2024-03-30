"use client";

import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { FC, FormEvent } from "react";
import toast from "react-hot-toast";

const LoginPage: FC = () => {
    const { login } = useAuth();
    const route = useRouter();
    const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<any> => {
        e.preventDefault();
        const fromData = e.currentTarget;
        const email = fromData.email.value;
        const password = fromData.password.value;
        const result = await login(email, password);
        if (result) {
            toast.success("Login Successfully");
        } else {
            return toast.error("Password or EMail Wrong");
        }
        
        if (result.user.role === "admin") {
            return route.push("/dashboard");
        } else if (result.user.role === "student") {
            return route.push("/my-report");
        } else {
            return route.push("/");
        }
    };
    return (
        <div className="py-12">
            <div className="container mx-auto">
                <div className=" flex flex-col justify-center py-8">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto mx-2">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-[#00bd29] shadow-lg  transform  -rotate-6 rounded-3xl" />
                        <div className="relative px-4 py-7 bg-white shadow-lg rounded-3xl sm:p-10">
                            <div className="max-w-md mx-auto">
                                <div>
                                    <h2 className="text-2xl text-gray-700 font-semibold">
                                        Sign In on
                                        <span className="textGradient">
                                            Edupy
                                        </span>
                                    </h2>
                                </div>
                                <form
                                    className="divide-y divide-gray-200"
                                    onSubmit={onSubmit}
                                >
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative">
                                            <input
                                                id="email"
                                                className="peer placeholder-transparent h-10 w-full border-b-2 dark:rounded-md dark:bg-slate-50 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                placeholder="Enter email.."
                                                required
                                                type="email"
                                                name="email"
                                            />
                                            <label
                                                htmlFor="email"
                                                className="absolute left-0 -top-3.5  text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600  peer-focus:text-sm"
                                            >
                                                Email Address
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <input
                                                id="password"
                                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300  dark:bg-slate-50 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                placeholder="Enter password..."
                                                required
                                                type="password"
                                                name="password"
                                            />
                                            <label
                                                htmlFor="password"
                                                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                            >
                                                Password
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <button
                                                type="submit"
                                                className="bg-[#00bd29] rounded-md px-4 py-1.5 w-full text-white"
                                            >
                                                Login
                                            </button>
                                        </div>
                                        <p className="max-w-xs text-base">
                                            If you don&apos;t have an account?
                                            Please{" "}
                                            <a
                                                className="text-[#00bd29] underline"
                                                href="/register"
                                            >
                                                Sign up{" "}
                                            </a>
                                            now
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
