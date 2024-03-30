"use client";

import Container from "@/components/Container/Container";
import useAuth from "@/hooks/useAuth";
import { FC, FormEvent } from "react";
import toast from "react-hot-toast";

const TreePlantationPage: FC = () => {
    const { user } = useAuth();
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fromData = e.currentTarget;
        const treePlantation = fromData.treePlantation.value;
        const taskData = {
            treePlantation: { value: treePlantation, updatedAt: new Date() },
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
                toast.error(result);
            } else if (response.status === 200) {
                toast.success("Task Submitted Successfully");
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
                        1. How many trees planting in last one month?
                    </h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-6">
                        <label className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3">
                            <input
                                type="radio"
                                defaultValue="0 trees planted"
                                name="treePlantation"
                            />
                            <p>0 trees planted</p>
                        </label>
                        <label className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3">
                            <input
                                type="radio"
                                defaultValue="1 tree planted"
                                name="treePlantation"
                            />
                            <p>1 tree planted</p>
                        </label>
                        <label className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3">
                            <input
                                type="radio"
                                defaultValue="2 trees planted"
                                name="treePlantation"
                            />
                            <p>2 trees planted</p>
                        </label>
                        <label className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3">
                            <input
                                type="radio"
                                defaultValue="3 trees planted"
                                name="treePlantation"
                            />
                            <p>3 trees planted</p>
                        </label>
                        <label className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3">
                            <input
                                type="radio"
                                defaultValue="4 trees planted"
                                name="treePlantation"
                            />
                            <p>4 trees planted</p>
                        </label>
                        <label className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3">
                            <input
                                type="radio"
                                defaultValue="5 trees planted"
                                name="treePlantation"
                            />
                            <p>5 trees planted</p>
                        </label>
                        <label className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3">
                            <input
                                type="radio"
                                defaultValue="6 trees planted"
                                name="treePlantation"
                            />
                            <p>6 trees planted</p>
                        </label>
                        <label className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3">
                            <input
                                type="radio"
                                defaultValue="7 trees planted"
                                name="treePlantation"
                            />
                            <p>7 trees planted</p>
                        </label>
                        <label className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3">
                            <input
                                type="radio"
                                defaultValue="8 trees planted"
                                name="treePlantation"
                            />
                            <p>8 trees planted</p>
                        </label>
                        <label className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3">
                            <input
                                type="radio"
                                defaultValue="9 trees planted"
                                name="treePlantation"
                            />
                            <p>9 trees planted</p>
                        </label>
                        <label className="flex items-center space-x-2 text-base bg-[#001d30] rounded-md px-4 py-3">
                            <input
                                type="radio"
                                defaultValue="10 ++ trees planted"
                                name="treePlantation"
                            />
                            <p>10 ++ trees planted</p>
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

export default TreePlantationPage;
