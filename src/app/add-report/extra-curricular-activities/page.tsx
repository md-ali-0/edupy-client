"use client";

import Container from "@/components/Container/Container";
import useAuth from "@/hooks/useAuth";
import { FC, FormEvent } from "react";
import toast from "react-hot-toast";

const ExtraCurricularActivities: FC = () => {
    const { user } = useAuth();
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fromData = e.currentTarget;
        const bookRead = fromData.bookRead.value == 1 && true || false;
        const religiousActivity = fromData.religiousActivity.value  == 1 && true || false;
        const personalDevelopment = fromData.personalDevelopment.value  == 1 && true || false;

        const taskData = {
            extraActivity: {bookRead, religiousActivity, personalDevelopment, updatedAt: new Date(),},
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
                    <div className="mb-6">
                        <h2 className="text-lg mb-2">
                            1. Did you read any books outside of textbooks in
                            last week?
                        </h2>
                        <div className="flex space-x-6 items-center">
                            <label className="flex items-center space-x-2 ">
                                <input
                                    type="radio"
                                    defaultValue={1}
                                    name="bookRead"
                                />
                                <p>Yes</p>
                            </label>
                            <label className="flex items-center space-x-2 ">
                                <input
                                    type="radio"
                                    defaultValue={0}
                                    name="bookRead"
                                />
                                <p>No</p>
                            </label>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-lg mb-2">
                            2. Did you participate in any religious activities
                            in last week?
                        </h2>
                        <div className="flex space-x-6 items-center">
                            <label className="flex items-center space-x-2 ">
                                <input
                                    type="radio"
                                    defaultValue={1}
                                    name="religiousActivity"
                                />
                                <p>Yes</p>
                            </label>
                            <label className="flex items-center space-x-2 ">
                                <input
                                    type="radio"
                                    defaultValue={0}
                                    name="religiousActivity"
                                />
                                <p>No</p>
                            </label>
                        </div>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-lg mb-2">
                            3. Did you perform any activities for personal
                            development in last week?
                        </h2>
                        <div className="flex space-x-6 items-center">
                            <label className="flex items-center space-x-2 ">
                                <input
                                    type="radio"
                                    defaultValue={1}
                                    name="personalDevelopment"
                                />
                                <p>Yes</p>
                            </label>
                            <label className="flex items-center space-x-2 ">
                                <input
                                    type="radio"
                                    defaultValue={0}
                                    name="personalDevelopment"
                                />
                                <p>No</p>
                            </label>
                        </div>
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

export default ExtraCurricularActivities;
