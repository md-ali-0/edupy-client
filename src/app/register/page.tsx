"use client";

import Container from "@/components/Container/Container";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { FC, FormEvent } from "react";
import toast from "react-hot-toast";

const RegisterPage: FC = () => {
    const { signUp } = useAuth();
    const route = useRouter();
    const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<any> => {
        e.preventDefault();
        const fromData = e.currentTarget;
        const name = fromData.fullname.value;
        const username = fromData.username.value;
        const email = fromData.email.value;
        const password = fromData.password.value;

        const result = await signUp(name, username, email, password);
        toast.success("Login Successfully");
        if (result.user.role === "admin") {
            return route.push("/dashboard");
        } else {
            return route.push("/");
        }
    };

    return (
        <Container>
            <div className="py-14 dark:text-gray-200 text-gray-900">
                <section className="max-w-md dark:bg-[#001d30] w-auto p-6 mx-auto rounded-md shadow-md register-bg ">
                    <h2 className="text-2xl dark:text-gray-200 text-gray-900 font-semibold">
                        Sign Up on
                        <span className="textGradient"> Edupy</span>
                    </h2>
                    <form onSubmit={onSubmit}>
                        <div className="grid grid-cols-1 gap-y-3 mt-4 ">
                            <div>
                                <label htmlFor="name">Full name</label>
                                <input
                                    id="name"
                                    className="block w-full px-4 py-2 mt-2 dark:bg-[#001422] border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none placeholder:text-gray-500"
                                    placeholder="Enter full name..."
                                    required
                                    type="text"
                                    name="fullname"
                                />
                            </div>
                            <div>
                                <label htmlFor="username">User Name</label>
                                <input
                                    id="username"
                                    className="block w-full px-4 py-2 mt-2 dark:bg-[#001422] border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none placeholder:text-gray-500"
                                    placeholder="Enter user name..."
                                    required
                                    type="text"
                                    name="username"
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email Address</label>
                                <input
                                    id="email"
                                    className="block w-full px-4 py-2 mt-2 dark:bg-[#001422] border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none "
                                    placeholder="Enter email..."
                                    required
                                    type="email"
                                    name="email"
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    className="block w-full px-4 py-2 mt-2 dark:bg-[#001422] border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none "
                                    placeholder="Enter password..."
                                    required
                                    type="password"
                                    name="password"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end my-4">
                            <button
                                type="submit"
                                className="bg-[#00bd29] font-semibold rounded-md px-3.5 py-2 w-full"
                            >
                                Sign up
                            </button>
                        </div>
                        <p className=" text-base">
                            If you have an account? Please{" "}
                            <a
                                className="text-[#00bd29] underline"
                                href="/login"
                            >
                                Sign In
                            </a>
                            now
                        </p>
                    </form>
                </section>
            </div>
        </Container>
    );
};

export default RegisterPage;
