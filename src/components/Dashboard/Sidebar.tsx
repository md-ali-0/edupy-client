"use client";

import { SideBarContext } from "@/provider/SideBarContext";
import Image from "next/image";
import Link from "next/link";
import { FC, useContext } from "react";
import logo from "../../assets/logo/logo.png";
import SideBarMenuItem from "./SideBarMenuItem";
import SidebarSubMenu from "./SidebarSubMenu";

const Sidebar: FC = () => {
    const context = useContext(SideBarContext);
    if (!context) {
        return null;
    }
    const { sidebarOpen, setSidebarOpen } = context;
    return (
        <>
            <div
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`fixed inset-0 z-20 transition-opacity  bg-[#001d30] opacity-50 lg:hidden ${
                    sidebarOpen ? "block" : "hidden"
                }`}
            ></div>
            <div
                className={`fixed inset-y-0 left-0 z-30 w-64 flex flex-col border dark:border-slate-800 bg-[#001d30] min-h-screen transition duration-300 transform lg:translate-x-0 lg:static lg:inset-0 ${
                    sidebarOpen
                        ? "translate-x-0 ease-out"
                        : "-translate-x-full ease-in"
                }`}
            >
                <div className="flex items-center justify-center border-b dark:border-slate-800 py-[16px]">
                    <Link href="/">
                        <Image src={logo} alt="" className="w-28" />
                    </Link>
                </div>
                <div className="overflow-y-auto custom-scroll">
                    <nav className="mt-5 px-3">
                        <ul>
                            <h4 className="text-gray-400 font-semibold text-xs mb-1">
                                Main
                            </h4>
                            <SideBarMenuItem
                                menu={{
                                    name: "Student Level",
                                    icon: "LuAreaChart",
                                    path: "/dashboard/student-level",
                                }}
                            />
                            <SidebarSubMenu
                                menu={{
                                    name: "Schools",
                                    icon: "LuSchool",
                                }}
                                subMenu={[
                                    {
                                        name: "Add School",
                                        path: "/dashboard/add-school",
                                    },
                                    {
                                        name: "All School",
                                        path: "/dashboard/all-schools",
                                    },
                                ]}
                            ></SidebarSubMenu>
                            <SideBarMenuItem
                                menu={{
                                    name: "Students",
                                    icon: "LuUser",
                                    path: "/dashboard/students",
                                }}
                            />
                            <SideBarMenuItem
                                menu={{
                                    name: "Back to Home",
                                    icon: "LuHome",
                                    path: "/",
                                }}
                            />
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
