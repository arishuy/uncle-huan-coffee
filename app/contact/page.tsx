import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function page() {
    return (
        <section
            id="contact"
            className="h-screen bg-yellow-600 flex flex-col items-center justify-center"
        >
            <div className="container mx-auto px-6 lg:px-16 text-center ">
                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <p className="text-white mb-8">
                    We d love to hear from you! Follow us on social media or get in touch
                    via email.
                </p>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-8 mb-6">
                    <a
                        href="https://facebook.com/your-page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-600 transition duration-300 text-3xl"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://instagram.com/your-page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-pink-500 transition duration-300 text-3xl"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://youtube.com/your-channel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-600 transition duration-300 text-3xl"
                    >
                        <FaYoutube />
                    </a>
                </div>

                {/* Contact Information */}
                <div className="text-white">
                    <p className="mb-2">Email: contact@yourcafe.com</p>
                    <p>Phone: +1 234 567 890</p>
                </div>
            </div>
        </section>
    );
}

export default page;