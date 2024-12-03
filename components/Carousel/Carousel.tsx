import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const imageUrls = [
    "https://res.cloudinary.com/dizm6unn4/image/upload/v1733105793/Huancafe/kqkpwx7f4bqhq7en7uht.jpg",
    "https://res.cloudinary.com/dizm6unn4/image/upload/v1733105793/Huancafe/vjrvb9xgi8grq5dtuvf9.jpg",
    "https://res.cloudinary.com/dizm6unn4/image/upload/v1733105793/Huancafe/indpf1engawuax6u9amr.jpg",
    "https://res.cloudinary.com/dizm6unn4/image/upload/v1733105793/Huancafe/ycfivsly2dpi6tcgobck.jpg",
    "https://res.cloudinary.com/dizm6unn4/image/upload/v1733105793/Huancafe/ycfivsly2dpi6tcgobck.jpg",
];

export default function CarouselDemo() {
    return (
        <div className="bg-main px-6 lg:px-16 py-10 h-screen flex items-center justify-center">
            <Carousel className="w-full max-w-7xl h-screen">
                <CarouselContent>
                    {imageUrls.map((url, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1 h-screen">
                                <Image
                                    src={url}
                                    alt={`Slide ${index + 1}`}
                                    className="object-cover w-full h-full rounded-md py-6"
                                    width={1500}
                                    height={1000}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
