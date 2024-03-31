"use client";

import { FC, FormEvent } from "react";
import toast from "react-hot-toast";

const AddSchoolPage: FC = () => {
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = e.currentTarget;
        const schoolName = formData.schoolName.value;
        const location = formData.location.value;
        const data = { name: schoolName, location: location };

        try {
            const response = await fetch("https://edupy-server.vercel.app/add-school", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            formData.reset()
            toast.success("School Added Successfully")
        } catch (error) {
            console.log(error);
            
        }
    };
    return (
        <div className="">
            <div className="flex justify-center items-center">
                <h3 className="text-primary text-4xl font-bold py-5">
                    Add School
                </h3>
            </div>
            <div className="bg-rose-50/50 dark:bg-[#001d30]  rounded-md py-2 px-3 md:w-3/4 mx-auto">
                <form
                    className="w-full  space-y-2 p-3 md:p-5  rounded-md"
                    onSubmit={onSubmit}
                >
                    <div className="md:flex gap-3 ">
                        <div className="md:w-1/2">
                            <label className="block text-sm font-medium text-gray-700 py-1.5">
                                <span className=" ">School Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="School Name"
                                name="schoolName"
                                className="block w-full px-4 py-2 mt-2 dark:bg-[#001422] border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none placeholder:text-gray-500"
                                required
                            />
                        </div>
                        <div className="md:w-1/2">
                            <label className="">
                                <span className="block text-sm font-medium text-gray-700 py-1.5">
                                    School Location
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="School Location"
                                name="location"
                                className="block w-full px-4 py-2 mt-2 dark:bg-[#001422] border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none placeholder:text-gray-500"
                                required
                            />
                        </div>
                    </div>
                    <div className=" text-center pt-5">
                        <button
                            type="submit"
                            className="mx-auto rounded bg-[#00bd29] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#00bd29]/95 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#00bd29]/90 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#00bd29]/90"
                        >
                            Create New School
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddSchoolPage;
