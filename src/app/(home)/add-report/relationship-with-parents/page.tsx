"use client";

import Container from "@/components/Container/Container";
import useAuth from "@/hooks/useAuth";
import { FC, FormEvent } from "react";
import toast from "react-hot-toast";

const RelationshipWithPartnerPage: FC = () => {
    const { user } = useAuth();
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fromData = e.currentTarget;
        const ordersFollowed = fromData.ordersFollowed.value;
        const taskData = {
            ordersFollowed: {value: ordersFollowed, updatedAt: new Date(),},
            studentEmail: user.email,
        };
        try {
            const response = await fetch("https://edupy-server.vercel.app/add-task", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(taskData),
            });

            const result = await response?.json();
            if (response.status === 500) {
                toast.error(result)
            } else if (response.status === 200) {
                toast.success("Task Submitted Successfully")
            }
        } catch (error) {
            console.log(error);
            
        }
    };
    return (
        <Container>
            <form className="my-16" onSubmit={onSubmit}>
                <div>
                    <h2 className="text-lg mb-4">
                        1. How many orders of your parents have you followed in
                        the concerned week?
                    </h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-6">
                        <label className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3">
                            <input
                                id="studyOption0"
                                type="radio"
                                defaultValue="0 orders followed"
                                name="ordersFollowed"
                            />
                            <p>0 orders followed</p>
                        </label>
                        <label className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3">
                            <input
                                id="studyOption1"
                                type="radio"
                                defaultValue="1-3 orders followed"
                                name="ordersFollowed"
                            />
                            <p>1-3 orders followed</p>
                        </label>
                        <label className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3">
                            <input
                                id="studyOption2"
                                type="radio"
                                defaultValue="4-6 orders followed"
                                name="ordersFollowed"
                            />
                            <p>4-6 orders followed</p>
                        </label>
                        <label className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3">
                            <input
                                id="studyOption3"
                                type="radio"
                                defaultValue="7-9 orders followed"
                                name="ordersFollowed"
                            />
                            <p>7-9 orders followed</p>
                        </label>
                        <label className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3">
                            <input
                                id="studyOption4"
                                type="radio"
                                defaultValue="10-13 orders followed"
                                name="ordersFollowed"
                            />
                            <p>10-13 orders followed</p>
                        </label>
                        <label className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3">
                            <input
                                id="studyOption5"
                                type="radio"
                                defaultValue="14-16 orders followed"
                                name="ordersFollowed"
                            />
                            <p>14-16 orders followed</p>
                        </label>
                        <label className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3">
                            <input
                                id="studyOption6"
                                type="radio"
                                defaultValue="17-19 orders followed"
                                name="ordersFollowed"
                            />
                            <p>17-19 orders followed</p>
                        </label>
                        <label className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3">
                            <input
                                id="studyOption7"
                                type="radio"
                                defaultValue="20-23 orders followed"
                                name="ordersFollowed"
                            />
                            <p>20-23 orders followed</p>
                        </label>
                        <label className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3">
                            <input
                                id="studyOption8"
                                type="radio"
                                defaultValue="24-26 orders followed"
                                name="ordersFollowed"
                            />
                            <p>24-26 orders followed</p>
                        </label>
                        <label className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3">
                            <input
                                id="studyOption9"
                                type="radio"
                                defaultValue="27-29 orders followed"
                                name="ordersFollowed"
                            />
                            <p>27-29 orders followed</p>
                        </label>
                        <label className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3">
                            <input
                                id="studyOption10"
                                type="radio"
                                defaultValue="30-33 ++ orders followed"
                                name="ordersFollowed"
                            />
                            <p>30-33 ++ orders followed</p>
                        </label>
                    </div>
                </div>
                <div className="flex justify-end mt-5">
                    <button className="bg-[#00bd29] rounded-md px-4 py-1.5 text-white">
                        Submit
                    </button>
                </div>
            </form>
        </Container>
    );
};

export default RelationshipWithPartnerPage;
