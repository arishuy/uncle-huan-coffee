"use client";
import React, { useEffect, useState } from "react";

function Home() {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        setShowText(true);
    }, []);

    return (
        <div id="home">
            <section className="bg-cover bg-center h-screen bg-[url('https://res.cloudinary.com/dizm6unn4/image/upload/v1733105793/Huancafe/ycfivsly2dpi6tcgobck.jpg')]">
                <div className="bg-black bg-opacity-75 h-full flex items-center justify-center">
                    <div
                        className={`text-center text-white px-6 transition-all duration-1000 ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 capitalize">
                            Welcome To Uncle Huan Coffee!
                        </h1>
                        <p className="text-lg md:text-2xl mb-6">
                            A perfect place to relax and enjoy your favorite drinks.
                        </p>
                    </div>
                </div>
            </section >
        </div >
    );
}

export default Home;
