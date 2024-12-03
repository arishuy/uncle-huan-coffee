import Image from "next/image";
import React from "react";

function page() {
    return (
        <div id="about" className="bg-main py-16 h-screen flex justify-center">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="flex flex-col md:flex-row h-full">
                    <div className="w-full md:w-1/2 md:pr-16 my-auto">
                        <h3 className="text-yellow-800 text-2xl font-semibold mb-4">
                            ABOUT US
                        </h3>
                        <h2 className="text-black text-4xl font-bold ">WE ARE</h2>
                        <h2 className="text-yellow-100 text-4xl font-bold mb-4">
                            UNCLE HUAN <span className="text-yellow-800">COFFEE</span>
                        </h2>
                        <p className="text-yellow-300 mb-4">
                            Our cafe is a place where coffee meets creativity. Located in the
                            heart of the city, we offer a cozy atmosphere and a wide variety
                            of drinks and snacks. Whether youre here to work, relax, or meet
                            friends, we strive to make every visit a delightful experience.
                        </p>
                        <p className="text-yellow-300 mb-4">
                            Since our opening in 2010, we have been dedicated to sourcing the
                            finest beans and crafting beverages with care. Our mission is to
                            serve not just coffee, but moments of joy and connection.
                        </p>
                        <p className="text-yellow-300">
                            Come and discover your new favorite place. From freshly brewed
                            coffee to delicious pastries, we have something for everyone!
                        </p>
                    </div>
                    <div className="w-full md:w-2/3 mb-8 md:mb-0 relative">
                        <Image
                            src="https://res.cloudinary.com/dizm6unn4/image/upload/v1733105795/Huancafe/indpf1engawuax6u9amr.jpg"
                            alt="Our Cafe"
                            className="rounded-lg shadow-lg absolute right-11 bottom-0 z-0 hover:cursor-pointer hover:z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500 opacity-75 hover:opacity-100"
                            width={350}
                            height={350}
                        />
                        <Image
                            src="https://res.cloudinary.com/dizm6unn4/image/upload/v1733105795/Huancafe/vjrvb9xgi8grq5dtuvf9.jpg"
                            alt="Our Cafe"
                            className="rounded-lg shadow-lg absolute bottom-0 hover:cursor-pointer z-20 hover:z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500 opacity-75 hover:opacity-100"
                            width={350}
                            height={350}
                        />
                        <Image
                            src="https://res.cloudinary.com/dizm6unn4/image/upload/v1733105795/Huancafe/kqkpwx7f4bqhq7en7uht.jpg"
                            alt="Our Cafe"
                            className="rounded-lg shadow-lg absolute right-1/2 left-1/2 -translate-x-1/2 translate-y-1/5 hover:cursor-pointer z-10 hover:z-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500 opacity-75 hover:opacity-100"
                            width={350}
                            height={350}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;