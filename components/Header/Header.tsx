import Image from "next/image";
import React from "react";

function Header() {
    return (
        <header className="bg-transparent absolute w-full text-white p-4 ">
            <div className="container mx-auto px-16 flex justify-between items-center">
                <div className="flex justify-center items-center gap-3">
                    <Image
                        src="https://res.cloudinary.com/dizm6unn4/image/upload/v1733105795/Huancafe/t7euznhyr4yk4vgt1qlb.jpg"
                        alt="logo"
                        width={30}
                        height={30}
                        className="rounded-sm"
                    />
                    <h1 className="text-3xl font-bold">Uncle Huan</h1>
                </div>
                <nav>
                    <ul className="flex space-x-5 text-xl">
                        <li>
                            <a href="#home" className="hover:text-gray-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#menu" className="hover:text-gray-300">
                                Menu
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-gray-300">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-gray-300">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;