import logo from "@/assets/logo/logo.png";
import Image from "next/image";
import { FC } from "react";

const Footer: FC = () => {
    return (
        <footer className=" dark:bg-[#001d30] bg-primaryBg text-secondaryText">
            <div className="py-16">
                <div className="container mx-auto flex flex-col justify-between  space-y-8 md:flex-row lg:space-y-0 px-3">
                    <div className="md:w-[26%]">
                        <div>
                            <Image
                                alt="logo"
                                loading="lazy"
                                width={110}
                                height={140}
                                decoding="async"
                                data-nimg={1}
                                style={{ color: "transparent" }}
                                src={logo}
                            />
                        </div>
                        <p className="desc pt-3 text-sm text-secondaryText">
                            We are here to share our skills, techniques and
                            educational knowledge for the future.
                        </p>
                        <div className="flex pt-3">
                            <a
                                href="https://www.facebook.com/edupyacademy"
                                target="_blank"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 512 512"
                                    className="text-lg mr-4 hover:text-green duration-300"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/edupyacademy/?hl=en"
                                target="_blank"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 448 512"
                                    className="text-lg mr-4 hover:text-green duration-300"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
                                </svg>
                            </a>
                            <a href="" target="_blank">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 448 512"
                                    className="text-lg mr-4 hover:text-green duration-300"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.youtube.com/@Edupybd"
                                target="_blank"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 576 512"
                                    className="text-lg mr-4 hover:text-green duration-300"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 text-sm gap-x-3 gap-y-8 md:w-[74%] md:ml-10 md:grid-cols-3">
                        <div className="space-y-3">
                            <h3 className="text-blue uppercase font-semibold">
                                Policy
                            </h3>
                            <ul className="space-y-1">
                                <li>
                                    <a
                                        className="hover:text-green duration-300"
                                        href="/"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="hover:text-green duration-300"
                                        href="/"
                                    >
                                        Refund Policy
                                    </a>
                                </li>{" "}
                                <li>
                                    <a
                                        className="hover:text-green duration-300"
                                        href="/"
                                    >
                                        Terms &amp; Condition
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="hover:text-green duration-300"
                                        href="/"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-blue uppercase font-semibold">
                                QUICK LINK
                            </h3>
                            <ul className="space-y-1">
                                <li>
                                    <a
                                        className="hover:text-green duration-300"
                                        href="/"
                                    >
                                        Blogs
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="hover:text-green duration-300"
                                        href="/"
                                    >
                                        Free Live Class
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="hover:text-green duration-300"
                                        href="/"
                                    >
                                        Upcomming Live Batch
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="hover:text-green duration-300"
                                        href="/"
                                    >
                                        Live Workshop
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="hover:text-green duration-300"
                                        href="/"
                                    >
                                        All Courses
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-blue uppercase font-semibold">
                                CONTACT US
                            </h3>
                            <div className="space-y-1">
                                <div className="flex pt-2">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 512 512"
                                        className="text-lg mr-2"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M436.9 364.8c-14.7-14.7-50-36.8-67.4-45.1-20.2-9.7-27.6-9.5-41.9.8-11.9 8.6-19.6 16.6-33.3 13.6-13.7-2.9-40.7-23.4-66.9-49.5-26.2-26.2-46.6-53.2-49.5-66.9-2.9-13.8 5.1-21.4 13.6-33.3 10.3-14.3 10.6-21.7.8-41.9C184 125 162 89.8 147.2 75.1c-14.7-14.7-18-11.5-26.1-8.6 0 0-12 4.8-23.9 12.7-14.7 9.8-22.9 18-28.7 30.3-5.7 12.3-12.3 35.2 21.3 95 27.1 48.3 53.7 84.9 93.2 124.3l.1.1.1.1c39.5 39.5 76 66.1 124.3 93.2 59.8 33.6 82.7 27 95 21.3 12.3-5.7 20.5-13.9 30.3-28.7 7.9-11.9 12.7-23.9 12.7-23.9 2.9-8.1 6.2-11.4-8.6-26.1z" />
                                    </svg>
                                    <p>+880 1315851280</p>
                                </div>
                                <div className="flex pt-2">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 512 512"
                                        className="text-lg mr-2"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z" />
                                    </svg>
                                    <p>ceo.edupybd@gmail.com</p>
                                </div>
                                <div className="flex pt-2">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 384 512"
                                        className="text-lg mr-2"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                    </svg>
                                    <p>Mirpur,Dhaka 1216, Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center dark:bg-primaryBg bg-[#001d30]">
                Copyright © 2023 by Edupy Academy All rights reserved
            </div>
        </footer>
    );
};

export default Footer;
