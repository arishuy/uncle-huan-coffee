import React from "react";
import Image from "next/image";

function FlipImage({ image1, image2 }: { image1: string; image2: string }) {
    return (
        <div className="card w-full">
            <div className="card__content relative p-20 transition-transform duration-1000">
                <div className="card__front absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
                    <Image src={image1} alt="menu-drink" width={1500} height={1000} />
                </div>
                <div className="card__back absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
                    <Image src={image2} alt="menu-drink" width={1500} height={1000} />
                </div>
            </div>
        </div>
    );
}

export default FlipImage;