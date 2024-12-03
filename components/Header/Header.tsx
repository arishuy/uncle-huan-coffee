"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { path } from "@/constants/path";

function Header() {
    const params = usePathname();
    return (
        <header className="bg-transparent absolute w-full text-white p-4 z-10 ">
            <div className="container mx-auto px-16 flex justify-between items-center">
                <Link href="/">
                    <div className="flex justify-center items-center gap-3">
                        <Image
                            src="https://res.cloudinary.com/dizm6unn4/image/upload/v1733105795/Huancafe/t7euznhyr4yk4vgt1qlb.jpg"
                            alt="logo"
                            width={30}
                            height={30}
                            className="rounded-sm"
                        />
                        <h1 className="text-3xl font-bold hidden md:block">Uncle Huan</h1>
                    </div>
                </Link>
                <nav>
                    <ul className="flex space-x-5 text-xl">
                        <li>
                            <Link
                                href="/"
                                className={`hover:text-gray-300 p-2 ${params === path.home
                                        ? "bg-yellow-600  rounded-xl px-4 font-semibold"
                                        : ""
                                    } `}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/menu"
                                className={`hover:text-gray-300 p-2 ${params === path.menu
                                        ? "bg-main  rounded-xl px-4 font-semibold"
                                        : ""
                                    } `}
                            >
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className={`hover:text-gray-300 p-2 ${params === path.about
                                        ? "bg-yellow-600  rounded-xl px-4 font-semibold"
                                        : ""
                                    }`}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className={`hover:text-gray-300 p-2 ${params === path.contact
                                        ? "bg-main  rounded-xl px-4 font-semibold"
                                        : ""
                                    }`}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul >
                </nav >
            </div >
        </header >
    );
}

export default Header;