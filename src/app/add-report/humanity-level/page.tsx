"use client";

import Container from "@/components/Container/Container";
import useAuth from "@/hooks/useAuth";
import { FC, FormEvent } from "react";
import toast from "react-hot-toast";

const HumanityLevelPage: FC = () => {
    const { user } = useAuth();
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fromData = e.currentTarget;
        const humanityLevel = fromData.humanityLevel.value;
        const taskData = {
            humanityLevel: {value: humanityLevel, updatedAt: new Date(),},
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
                        1.How many people have you helped in the past week?
                    </h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-6">
                        <label
                            htmlFor="studyOption0"
                            className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3"
                        >
                            <input
                                id="studyOption0"
                                type="radio"
                                defaultValue="0 people"
                                name="humanityLevel"
                            />
                            <p>0 people</p>
                        </label>
                        <label
                            htmlFor="studyOption1"
                            className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3"
                        >
                            <input
                                id="studyOption1"
                                type="radio"
                                defaultValue="1 people"
                                name="humanityLevel"
                            />
                            <p>1 people</p>
                        </label>
                        <label
                            htmlFor="studyOption2"
                            className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3"
                        >
                            <input
                                id="studyOption2"
                                type="radio"
                                defaultValue="2 people"
                                name="humanityLevel"
                            />
                            <p>2 people</p>
                        </label>
                        <label
                            htmlFor="studyOption3"
                            className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3"
                        >
                            <input
                                id="studyOption3"
                                type="radio"
                                defaultValue="3 people"
                                name="humanityLevel"
                            />
                            <p>3 people</p>
                        </label>
                        <label
                            htmlFor="studyOption4"
                            className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3"
                        >
                            <input
                                id="studyOption4"
                                type="radio"
                                defaultValue="4 people"
                                name="humanityLevel"
                            />
                            <p>4 people</p>
                        </label>
                        <label
                            htmlFor="studyOption5"
                            className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3"
                        >
                            <input
                                id="studyOption5"
                                type="radio"
                                defaultValue="5 people"
                                name="humanityLevel"
                            />
                            <p>5 people</p>
                        </label>
                        <label
                            htmlFor="studyOption6"
                            className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3"
                        >
                            <input
                                id="studyOption6"
                                type="radio"
                                defaultValue="6 people"
                                name="humanityLevel"
                            />
                            <p>6 people</p>
                        </label>
                        <label
                            htmlFor="studyOption7"
                            className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3"
                        >
                            <input
                                id="studyOption7"
                                type="radio"
                                defaultValue="7 or more people"
                                name="humanityLevel"
                            />
                            <p>7 or more people</p>
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

export default HumanityLevelPage;
