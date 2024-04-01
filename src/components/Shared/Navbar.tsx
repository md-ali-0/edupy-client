"use client";

import logo from "@/assets/logo/logo.png";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Container from "../Container/Container";

const Navbar: FC = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openDropDown, setOpenDropDown] = useState(false);
    const [openMobileDropDown, setOpenMobileDropDown] = useState(false);
    const btnRef = useRef(null);
    const mobileBtnRef = useRef(null);
    const { user, logout } = useAuth();
    const handleLogout = async () => {
        await logout();
        toast.success("logout Successfully");
    };
    useEffect(()=>{
        window.addEventListener("click", (e) => {
            if (e.target !== btnRef.current) {
                setOpenDropDown(false);
            }
            if (e.target !== mobileBtnRef.current) {
                setOpenMobileDropDown(false);
            }
        });
    },[openDropDown, openMobileDropDown])
    return (
        <div className="dark:bg-[#001d30] bg-slate-100 sticky top-0 z-[999]">
            <Container>
                <div className="flex justify-between items-center  py-7">
                    <Link
                        className="flex items-center justify-between"
                        href="/"
                    >
                        <Image
                            alt="logo"
                            loading="lazy"
                            width={110}
                            height={100}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            src={logo}
                        />
                    </Link>
                    <div className="">
                        <ul className="md:flex hidden  items-center justify-center space-x-6">
                            <li>
                                <Link
                                    className="hover:text-[#1a94f5] dark:hover:text-[#1a94f5] duration-300"
                                    href={"/"}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-[#1a94f5] dark:hover:text-[#1a94f5] duration-300"
                                    href=""
                                />
                            </li>
                            <li>
                                <Link
                                    href="https://shohojatobd.com/"
                                    target="_blank"
                                    className="md:-ml-5 hover:text-[#1a94f5] dark:hover:text-[#1a94f5] duration-300"
                                >
                                    Shohojato
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-[#1a94f5] dark:hover:text-[#1a94f5] duration-300"
                                    href="/library"
                                >
                                    Library
                                </Link>
                            </li>
                            {user ? (
                                <div className="relative inline-block mt-[6px]">
                                    <button
                                        className="tooltip tooltip-left"
                                        type="button"
                                        onClick={() =>
                                            setOpenDropDown(!openDropDown)
                                        }
                                    >
                                        <Image
                                            alt=""
                                            loading="lazy"
                                            width={40}
                                            height={40}
                                            ref={btnRef}
                                            decoding="async"
                                            className="rounded-full border border-gray-600  w-[40px] h-[40px]"
                                            src={user.image}
                                            style={{ color: "transparent" }}
                                        />
                                    </button>
                                    <div
                                        className={`${
                                            openDropDown ? "" : "hidden"
                                        } absolute right-0 top-11 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md primary-text shadow-lg bg-gray-100 dark:bg-[#001d30] focus:outline-none`}
                                    >
                                        <div className="px-1 py-1 " role="none">
                                            <Link
                                                className="group hover:bg-[#00bd29] flex w-full items-center rounded-md px-2 py-2 text-base"
                                                role="menuitem"
                                                tabIndex={-1}
                                                href="/add-report"
                                            >
                                                <span>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        version="1.1"
                                                        viewBox="0 0 32 32"
                                                        className="mr-2 h-5 w-5"
                                                        aria-hidden="true"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M27.028 25.367c0 1.071-0.876 1.947-1.947 1.947h-18.163c-1.071 0-1.947-0.876-1.947-1.947v-18.163c0-1.071 0.876-1.947 1.947-1.947h18.163c1.071 0 1.947 0.876 1.947 1.947v18.163zM27.028 12.187l-1.992-1.342c0.040-0.172 0.064-0.351 0.064-0.536 0-1.294-1.049-2.344-2.344-2.344s-2.344 1.049-2.344 2.344c0 0.509 0.164 0.979 0.44 1.364l-4.307 6.586c-0.175-0.042-0.358-0.067-0.546-0.067-0.577 0-1.104 0.209-1.513 0.555l-2.883-1.659c0.015-0.106 0.025-0.213 0.025-0.323 0-1.294-1.049-2.344-2.344-2.344s-2.344 1.049-2.344 2.344c0 0.321 0.065 0.627 0.182 0.906l-2.153 1.997v2.125l3.198-2.967c0.332 0.18 0.712 0.282 1.116 0.282 0.62 0 1.182-0.242 1.601-0.636l2.813 1.619c-0.028 0.144-0.043 0.292-0.043 0.444 0 1.294 1.049 2.343 2.344 2.343s2.344-1.049 2.344-2.343c0-0.539-0.184-1.034-0.49-1.43l4.277-6.54c0.2 0.055 0.409 0.087 0.626 0.087 0.543 0 1.041-0.186 1.439-0.496l2.833 1.909v-1.878z" />
                                                    </svg>
                                                </span>
                                                Add Report
                                            </Link>
                                            <Link
                                                className="group hover:bg-[#00bd29] flex w-full items-center rounded-md px-2 py-2 text-base"
                                                role="menuitem"
                                                tabIndex={-1}
                                                href="/my-report"
                                            >
                                                <span>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="none"
                                                        strokeWidth={2}
                                                        viewBox="0 0 24 24"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="mr-2 h-5 w-5"
                                                        aria-hidden="true"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            stroke="none"
                                                            d="M0 0h24v24H0z"
                                                            fill="none"
                                                        />
                                                        <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                                                        <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                                                        <path d="M9 17v-5" />
                                                        <path d="M12 17v-1" />
                                                        <path d="M15 17v-3" />
                                                    </svg>
                                                </span>
                                                My Report
                                            </Link>
                                            <div
                                                className="group cursor-pointer hover:bg-[#00bd29] flex w-full items-center rounded-md px-2 py-2 text-base"
                                                role="menuitem"
                                                onClick={handleLogout}
                                                tabIndex={-1}
                                            >
                                                <svg
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeWidth={2}
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="mr-2 h-5 w-5"
                                                    aria-hidden="true"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                                                    <polyline points="10 17 15 12 10 7" />
                                                    <line
                                                        x1={15}
                                                        y1={12}
                                                        x2={3}
                                                        y2={12}
                                                    />
                                                </svg>
                                                Log out
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <li>
                                    <Link
                                        className="bg-[#00bd29] text-white px-5 py-1.5 rounded"
                                        href="/login"
                                    >
                                        Login
                                    </Link>
                                </li>
                            )}
                        </ul>
                        <ul
                            className={`md:hidden flex flex-col space-y-3 text-center dark:bg-[#001422] bg-gray-200 fixed w-full top-14 overflow-y-auto bottom-0 py-10 mt-7 pl-4 duration-500 ${
                                openMenu ? "left-0" : "left-[-100%]"
                            }`}
                        >
                            <li className="mt-14" />
                            <li>
                                <Link
                                onClick={() => setOpenMenu(!openMenu)}
                                    className="hover:text-[#1a94f5] dark:hover:text-[#1a94f5] duration-300"
                                    href="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                onClick={() => setOpenMenu(!openMenu)}
                                    href="https://shohojatobd.com/"
                                    target="_blank"
                                    className="hover:text-[#1a94f5] dark:hover:text-[#1a94f5] duration-300"
                                >
                                    Shohojato
                                </Link>
                            </li>
                            <li>
                                <Link
                                onClick={() => setOpenMenu(!openMenu)}
                                    className="hover:text-[#1a94f5] dark:hover:text-[#1a94f5] duration-300"
                                    href="/library"
                                >
                                    Library
                                </Link>
                            </li>
                            {user ? (
                                <div className="relative inline-block mt-[6px]">
                                    <button
                                        className="tooltip tooltip-left"
                                        type="button"
                                        
                                        onClick={() =>
                                            setOpenMobileDropDown(!openMobileDropDown)
                                        }
                                    >
                                        <div className="flex flex-col items-center justify-center">
                                            <Image
                                                alt=""
                                                loading="lazy"
                                                width={40}
                                                height={40}
                                                ref={mobileBtnRef}
                                                decoding="async"
                                                className="rounded-full border border-gray-600  w-[40px] h-[40px]"
                                                src={user?.image}
                                                style={{ color: "transparent" }}
                                            />
                                            <p className="text-base mt-1 font-semibold">
                                                {user?.name}
                                            </p>
                                        </div>
                                    </button>
                                    <div
                                        onClick={() => setOpenMenu(false)}
                                        className={`${
                                            openMobileDropDown ? "" : "hidden"
                                        } absolute right-0 top-11 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md primary-text shadow-lg bg-gray-100 dark:bg-[#001d30] focus:outline-none`}
                                    >
                                        <div className="px-1 py-1 " role="none">
                                            <Link
                                                className="group hover:bg-[#00bd29] flex w-full items-center rounded-md px-2 py-2 text-base"
                                                role="menuitem"
                                                tabIndex={-1}
                                                href="/add-report"
                                            >
                                                <span>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        version="1.1"
                                                        viewBox="0 0 32 32"
                                                        className="mr-2 h-5 w-5"
                                                        aria-hidden="true"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M27.028 25.367c0 1.071-0.876 1.947-1.947 1.947h-18.163c-1.071 0-1.947-0.876-1.947-1.947v-18.163c0-1.071 0.876-1.947 1.947-1.947h18.163c1.071 0 1.947 0.876 1.947 1.947v18.163zM27.028 12.187l-1.992-1.342c0.040-0.172 0.064-0.351 0.064-0.536 0-1.294-1.049-2.344-2.344-2.344s-2.344 1.049-2.344 2.344c0 0.509 0.164 0.979 0.44 1.364l-4.307 6.586c-0.175-0.042-0.358-0.067-0.546-0.067-0.577 0-1.104 0.209-1.513 0.555l-2.883-1.659c0.015-0.106 0.025-0.213 0.025-0.323 0-1.294-1.049-2.344-2.344-2.344s-2.344 1.049-2.344 2.344c0 0.321 0.065 0.627 0.182 0.906l-2.153 1.997v2.125l3.198-2.967c0.332 0.18 0.712 0.282 1.116 0.282 0.62 0 1.182-0.242 1.601-0.636l2.813 1.619c-0.028 0.144-0.043 0.292-0.043 0.444 0 1.294 1.049 2.343 2.344 2.343s2.344-1.049 2.344-2.343c0-0.539-0.184-1.034-0.49-1.43l4.277-6.54c0.2 0.055 0.409 0.087 0.626 0.087 0.543 0 1.041-0.186 1.439-0.496l2.833 1.909v-1.878z" />
                                                    </svg>
                                                </span>
                                                Add Report
                                            </Link>
                                            <Link
                                                className="group hover:bg-[#00bd29] flex w-full items-center rounded-md px-2 py-2 text-base"
                                                role="menuitem"
                                                tabIndex={-1}
                                                href="/my-report"
                                            >
                                                <span>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="none"
                                                        strokeWidth={2}
                                                        viewBox="0 0 24 24"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="mr-2 h-5 w-5"
                                                        aria-hidden="true"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            stroke="none"
                                                            d="M0 0h24v24H0z"
                                                            fill="none"
                                                        />
                                                        <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                                                        <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                                                        <path d="M9 17v-5" />
                                                        <path d="M12 17v-1" />
                                                        <path d="M15 17v-3" />
                                                    </svg>
                                                </span>
                                                My Report
                                            </Link>
                                            <div
                                                className="group cursor-pointer hover:bg-[#00bd29] flex w-full items-center rounded-md px-2 py-2 text-base"
                                                role="menuitem"
                                                onClick={handleLogout}
                                                tabIndex={-1}
                                            >
                                                <svg
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeWidth={2}
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="mr-2 h-5 w-5"
                                                    aria-hidden="true"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                                                    <polyline points="10 17 15 12 10 7" />
                                                    <line
                                                        x1={15}
                                                        y1={12}
                                                        x2={3}
                                                        y2={12}
                                                    />
                                                </svg>
                                                Log out
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <li>
                                    <Link
                                        onClick={() => setOpenMenu(!openMenu)}
                                        className="bg-[#00bd29] text-white px-5 py-1.5 rounded"
                                        href="/login"
                                    >
                                        Login
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div
                        onClick={() => setOpenMenu(!openMenu)}
                        className="text-3xl md:hidden dark:text-gray-300 cursor-pointer text-gray-800"
                    >
                        {openMenu ? (
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="none"
                                    d="M0 0h24v24H0V0z"
                                    opacity=".87"
                                ></path>
                                <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path>
                            </svg>
                        ) : (
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
