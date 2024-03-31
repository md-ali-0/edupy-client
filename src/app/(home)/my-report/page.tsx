"use client";

import Container from "@/components/Container/Container";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import { FC, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsFileLock } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";
import { RiPencilLine, RiShieldUserLine } from "react-icons/ri";

interface School {
    name: string;
}

interface ExtraActivity {
    bookRead: boolean;
    religiousActivity: boolean;
    personalDevelopment: boolean;
}

interface StudentLevel {
    _id: string;
    studyRoutine: any;
    humanityLevel: any;
    liesCount: any;
    ordersFollowed: any;
    treePlantation: any;
    extraActivity: ExtraActivity;
    studentEmail: any;
}

const MyReportPage: FC = () => {
    const { user } = useAuth();
    const [schools, setSchools] = useState<School[]>([]);
    const [studentLevel, setStudentLevels] = useState<StudentLevel>({
        _id: "",
        studyRoutine: "",
        humanityLevel: "",
        liesCount: "",
        ordersFollowed: "",
        treePlantation: "",
        extraActivity: {
            bookRead: false,
            religiousActivity: false,
            personalDevelopment: false,
        },
        studentEmail: "",
    });

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fromData = e.currentTarget;
        const name = fromData.fullname.value;
        const phone = fromData.phone.value;
        const school = fromData.school.value;
        const address = fromData.address.value;
        const city = fromData.city.value;
        const country = fromData.country.value;
        const bio = fromData.bio.value;
        const userData = { name, phone, school, address, city, country, bio };
        console.log(userData);

        const loadingToast = toast.loading("User Updating ... ");
        try {
            await fetch(`https://edupy-server.vercel.app/edit-user/${user?._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
            toast.dismiss(loadingToast);
            toast.success("Successfully Changed!");
        } catch (error) {
            console.log(error);
        }
    };
    const passwordSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const password = e.currentTarget.password.value;
        const confirmPassword = e.currentTarget.confirm_password.value;

        if (password === confirmPassword) {
            const loadingToast = toast.loading("Password Updating ... ");
            try {
                await fetch(`https://edupy-server.vercel.app/update-pass/${user?._id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ password: password }),
                });
                toast.dismiss(loadingToast);
                toast.success("Successfully Changed!");
            } catch (error) {
                console.log(error);
            }
        } else {
            toast.error("Password and Confirm Password Must be Same !");
        }
    };

    useEffect(() => {
        fetch("https://edupy-server.vercel.app/all-schools")
            .then((res) => res.json())
            .then((data) => setSchools(data))
            .catch((err) => console.log(err));

        fetch(`https://edupy-server.vercel.app/get-student-level/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setStudentLevels(data))
            .catch((err) => console.log(err));
    }, [user]);

    console.log(user);

    return (
        <Container>
            <div className="grid grid-cols-12 gap-x-6 py-10">
                <div className="col-span-12 xl:col-span-4">
                    <div className="mb-6 flex flex-col rounded dark:bg-[#001d30] bg-white shadow">
                        <div className="p-6 relative">
                            <div className="flex relative before:bg-black/50 before:absolute before:w-full before:h-full before:rounded-sm">
                                <Image
                                    src={
                                        "https://timelinecovers.pro/facebook-cover/download/ultra-hd-space-facebook-cover.jpg"
                                    }
                                    alt=""
                                    width={350}
                                    height={200}
                                    className="h-[200px] w-full rounded-sm"
                                    id="profile-img2"
                                />
                                <span className="absolute top-5 right-5 flex p-2 rounded-sm ring-1 ring-black/10 text-white bg-black/10 leading-none">
                                    <RiPencilLine
                                        className="inline"
                                        size={20}
                                    />
                                    <input
                                        type="file"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        id="profile-change"
                                    />
                                </span>
                            </div>
                            <div className="absolute top-[4.5rem] inset-x-0 text-center space-y-3">
                                <div className="flex justify-center w-full">
                                    <div className="relative">
                                        <Image
                                            src={user?.image}
                                            width={24}
                                            height={24}
                                            className="w-24 h-24 rounded-full ring-4 ring-white/10 mx-auto"
                                            id="profile-img"
                                            alt="pofile-img"
                                        />
                                        <span className="absolute bottom-0 right-0 block p-1 rounded-full ring-2 ring-white/10 text-white bg-white/10 dark:bg-[#001422] leading-none">
                                            <RiPencilLine
                                                className="inline"
                                                size={20}
                                            />
                                            <input
                                                type="file"
                                                name="image"
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                id="profile-change"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 flex flex-col rounded dark:bg-[#001d30] bg-white shadow">
                        <div className="py-3 px-4 font-medium">
                            <h5 className="text-base font-semibold leading-none flex">
                                <BsFileLock className="mr-2" />
                                Security Settings
                            </h5>
                        </div>
                        <form className="p-6 pt-0" onSubmit={passwordSubmit}>
                            <div>
                                <div className="my-5">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium mb-0">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="block w-full px-4 py-2 mt-2 dark:bg-[#001422] border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none placeholder:text-gray-500"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>
                                <div className="my-5">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium mb-0">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            name="confirm_password"
                                            className="block w-full px-4 py-2 mt-2 dark:bg-[#001422] border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none placeholder:text-gray-500"
                                            placeholder="Confirm Password"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-end gap-2 mb-3 text-left px-3">
                                <button
                                    type="submit"
                                    className="bg-[#00bd29] rounded-md px-4 py-1.5 text-white"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="rounded dark:bg-[#001d30] bg-white shadow">
                        <div className=" shadow-md rounded-md p-4 mb-4">
                        <div className="py-3 px-4 font-medium">
                            <h5 className="text-base font-semibold leading-none flex">
                                <FaChartLine className="mr-2" />
                                Student Level
                            </h5>
                        </div>
                            <div className="p-6 pt-0 grid grid-cols-2 gap-4">
                                <div>
                                    <h3 className="font-semibold mb-2">
                                        Study Routine
                                    </h3>
                                    <p>
                                        {studentLevel?.studyRoutine?.value}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">
                                        Humanity Level
                                    </h3>
                                    <p>
                                        {studentLevel?.humanityLevel.value}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">
                                        Lies Count
                                    </h3>
                                    <p>
                                        {studentLevel?.liesCount.value}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">
                                        Orders Followed
                                    </h3>
                                    <p>
                                        {studentLevel?.ordersFollowed.value}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">
                                        Tree Plantation
                                    </h3>
                                    <p>
                                        {studentLevel?.treePlantation.value}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">
                                        Extra Activity
                                    </h3>
                                    <p>
                                        Book Read:{" "}
                                        {studentLevel?.extraActivity?.bookRead
                                            ? "Yes"
                                            : "No"}
                                    </p>
                                    <p>
                                        Religious Activity:{" "}
                                        {studentLevel?.extraActivity
                                            ?.religiousActivity
                                            ? "Yes"
                                            : "No"}
                                    </p>
                                    <p>
                                        Personal Development:{" "}
                                        {studentLevel?.extraActivity
                                            ?.personalDevelopment
                                            ? "Yes"
                                            : "No"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 xl:col-span-8">
                    <form
                        className="mb-6 flex flex-col rounded dark:bg-[#001d30] bg-white shadow"
                        onSubmit={onSubmit}
                    >
                        <div className="flex flex-col rounded dark:bg-[#001d30] bg-white shadow-none">
                            <div className="py-3 px-4 font-medium">
                                <h5 className="text-base font-semibold leading-none flex">
                                    <RiShieldUserLine className="mr-2" />
                                    Profile Settings
                                </h5>
                            </div>
                            <div className="p-6">
                                <div>
                                    <div className="my-5">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium mb-0">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="fullname"
                                                className="block w-full px-4 py-2 mt-2 dark:bg-[#001422] border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none placeholder:text-gray-500"
                                                defaultValue={user?.name}
                                                placeholder="Full Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid lg:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium mb-0">
                                                Phone Number
                                            </label>
                                            <input
                                                type="text"
                                                name="phone"
                                                className="block w-full px-4 py-2 mt-2 dark:bg-[#001422] border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none placeholder:text-gray-500"
                                                defaultValue={user?.phone}
                                                placeholder="+880 123-456-789"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium mb-0">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="block w-full px-4 py-2 mt-2 dark:bg-[#001422] border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none placeholder:text-gray-500"
                                                defaultValue={user?.email}
                                                readOnly
                                                placeholder="example@site.com"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="my-5 space-y-3">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium mb-0">
                                                School Name
                                            </label>
                                            <select
                                                name="school"
                                                required
                                                className="block w-full px-4 py-2 mt-2 dark:bg-[#001422] border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none placeholder:text-gray-500"
                                                defaultValue={user?.school}
                                            >
                                                {schools.map((school, idx) => (
                                                    <option
                                                        value={school.name}
                                                        key={idx}
                                                    >
                                                        {school.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium mb-0">
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                className="block w-full px-4 py-2 mt-2 dark:bg-[#001422] border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none placeholder:text-gray-500"
                                                defaultValue={user?.address}
                                                placeholder="Address"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="grid lg:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium mb-0">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                className="block w-full px-4 py-2 mt-2 dark:bg-[#001422] border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none placeholder:text-gray-500"
                                                defaultValue={user?.city}
                                                placeholder="City"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium mb-0">
                                                Country
                                            </label>
                                            <input
                                                type="text"
                                                name="country"
                                                className="block w-full px-4 py-2 mt-2 dark:bg-[#001422] border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none placeholder:text-gray-500"
                                                defaultValue={user?.country}
                                                placeholder="Country"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium mb-0">
                                                Bio
                                            </label>
                                            <textarea
                                                name="bio"
                                                className="block w-full px-4 py-2 mt-2 dark:bg-[#001422] border dark:text-gray-100 border-gray-600 rounded-md focus:border-[#00bd29] focus:outline-none placeholder:text-gray-500"
                                                rows={3}
                                                placeholder="Add Your Bio"
                                                defaultValue={user?.bio}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-2 mb-6 text-left px-3">
                            <button
                                type="submit"
                                className="bg-[#00bd29] rounded-md px-4 py-1.5 text-white"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default MyReportPage;
