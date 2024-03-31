"use client"

import useAuth from "@/hooks/useAuth";
import { SideBarContext } from "@/provider/SideBarContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useContext, useState } from "react";
import toast from "react-hot-toast";

const Navbar: FC = () => {
    const router = useRouter()
    const { user, logout } = useAuth()

    const [dropdownOpen, setDropdownOpen] = useState(false);   
     
    const context = useContext(SideBarContext);
    if (!context) {
        return null;
    }
    const { sidebarOpen, setSidebarOpen } = context;

    const handleLogout = async () => {
        try {
            await logout()
            toast.success('Logout successful')
            router.push('/login')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex relative items-center dark:bg-[#001d30] border-b dark:border-slate-800 justify-between px-6 py-3 shadow-md">
            <div className="flex items-center">
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="text-gray-500 focus:outline-none lg:hidden"
                >
                    <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 6H20M4 12H20M4 18H11"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>

            <div className="flex gap-4 items-center">
                <div className="flex items-center">
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="relative block w-10 h-10 overflow-hidden rounded-full shadow focus:outline-none"
                        >
                            <Image
                                className="object-cover w-full h-full"
                                src={user?.image}
                                alt="Your avatar"
                                width={40}
                                height={40}
                            />
                        </button>

                        <div
                            onClick={() => setDropdownOpen(false)}
                            className={`fixed inset-0 z-10 w-full h-full ${dropdownOpen ? "" : "hidden"
                                }`}
                        ></div>
                        

                        <div
                            className={`absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl ${dropdownOpen ? "" : "hidden"
                                }`}
                        >
                            <Link
                                href="/dashboard/profile"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                            >
                                Profile
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="block text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white w-full"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};
export default Navbar;
