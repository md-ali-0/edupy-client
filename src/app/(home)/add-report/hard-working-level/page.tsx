"use client";

import Container from "@/components/Container/Container";
import useAuth from "@/hooks/useAuth";
import { FC, FormEvent } from "react";
import toast from "react-hot-toast";

const HardWorkingLevelPage: FC = () => {
    const { user } = useAuth();
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fromData = e.currentTarget;
        const studyRoutine = fromData.studyRoutine.value;
        const taskData = {
            studyRoutine: {value: studyRoutine, updatedAt: new Date(),},
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
                        1. What is your weekly study routine like?
                    </h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-6">
                        <></>
                        <label
                            htmlFor="studyOption0"
                            className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3"
                        >
                            <input
                                id="studyOption0"
                                type="radio"
                                defaultValue="0 hour per week"
                                name="studyRoutine"
                            />
                            <p>0 hour per week</p>
                        </label>
                        <label
                            htmlFor="studyOption1"
                            className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3"
                        >
                            <input
                                id="studyOption1"
                                type="radio"
                                defaultValue="1-5 hours per week"
                                name="studyRoutine"
                            />
                            <p>1-5 hours per week</p>
                        </label>
                        <label
                            htmlFor="studyOption2"
                            className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3"
                        >
                            <input
                                id="studyOption2"
                                type="radio"
                                defaultValue="6-10 hours per week"
                                name="studyRoutine"
                            />
                            <p>6-10 hours per week</p>
                        </label>
                        <label
                            htmlFor="studyOption3"
                            className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3"
                        >
                            <input
                                id="studyOption3"
                                type="radio"
                                defaultValue="11-15 hours per week"
                                name="studyRoutine"
                            />
                            <p>11-15 hours per week</p>
                        </label>
                        <label
                            htmlFor="studyOption4"
                            className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3"
                        >
                            <input
                                id="studyOption4"
                                type="radio"
                                defaultValue="16-20 hours per week"
                                name="studyRoutine"
                            />
                            <p>16-20 hours per week</p>
                        </label>
                        <label
                            htmlFor="studyOption5"
                            className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3"
                        >
                            <input
                                id="studyOption5"
                                type="radio"
                                defaultValue="21-25 hours per week"
                                name="studyRoutine"
                            />
                            <p>21-25 hours per week</p>
                        </label>
                        <label
                            htmlFor="studyOption6"
                            className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3"
                        >
                            <input
                                id="studyOption6"
                                type="radio"
                                defaultValue="26-30 hours per week"
                                name="studyRoutine"
                            />
                            <p>26-30 hours per week</p>
                        </label>
                        <label
                            htmlFor="studyOption7"
                            className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3"
                        >
                            <input
                                id="studyOption7"
                                type="radio"
                                defaultValue="31-35 hours per week"
                                name="studyRoutine"
                            />
                            <p>31-35 hours per week</p>
                        </label>
                        <label
                            htmlFor="studyOption8"
                            className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3"
                        >
                            <input
                                id="studyOption8"
                                type="radio"
                                defaultValue="36-40 hours per week"
                                name="studyRoutine"
                            />
                            <p>36-40 hours per week</p>
                        </label>
                        <label
                            htmlFor="studyOption9"
                            className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3"
                        >
                            <input
                                id="studyOption9"
                                type="radio"
                                defaultValue="41-45 hours per week"
                                name="studyRoutine"
                            />
                            <p>41-45 hours per week</p>
                        </label>
                        <label
                            htmlFor="studyOption10"
                            className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3"
                        >
                            <input
                                id="studyOption10"
                                type="radio"
                                defaultValue="46-50 ++ hours per week"
                                name="studyRoutine"
                            />
                            <p>46-50 ++ hours per week</p>
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

export default HardWorkingLevelPage;
