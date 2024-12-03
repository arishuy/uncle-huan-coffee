"use client";
import React from "react";

const reviews = [
    {
        id: 1,
        name: "Lộc Võ",
        avatar: "https://i.pravatar.cc/100?u=1",
        content:
            "Giá hợp lý, view đẹp ngay phố cổ. Nhân viên rất niềm nở và dễ thương(đặc biệt là bạn nữ tóc ngắn). Cảm ơn các bạn vì đã không phân biệt khách Việt và khách nước ngoài như 1 số quán khác.",
        rating: 5,
    },
    {
        id: 2,
        name: "English And Me",
        avatar: "https://i.pravatar.cc/100?u=2",
        content:
            "Lần đầu tới quán mình order Cà phê trứng và… “10 điểm ko có nhưng”. Mình nghĩ nếu caphê trứng mà ngonnn như thế thì chắc là các món khác cũng sẽ OK luôn. Quán có điều hoà tầng 2 nên ngồi miết ko muốn về:)) Mình thích bé nhân viên phục vụ nhẹ nhàng, hài hòa và nhiệt tình. Sao mình không biết tới Uncle Huan sớm hơn nhỉ.",
        rating: 4,
    },
    {
        id: 3,
        name: "Alex Johnson",
        avatar: "https://i.pravatar.cc/100?u=3",
        content:
            "Quán cafe ngay đầu phố cổ khúc HBT. Quán có món cafe muối decor rất đẹp luôn, view cũng chill, nên ghé khi đến H.A nha",
        rating: 5,
    },
];

function Review() {
    return (
        <div className="bg-main py-10">
            <div className="container mx-auto px-6 lg:px-16">
                <h3 className="text-yellow-700 text-2xl font-semibold mb-4 text-center">
                    REVIEWS
                </h3>
                <h2 className="text-black text-4xl font-bold text-center mb-2">
                    WHAT <span className="text-yellow-200">CUSTOMERS</span> SAY
                </h2>
                <div className="flex items-center justify-center mb-8">
                    <h4 className="text-center text-wrap w-1/2 text-yellow-50">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Praesentium nemo facilis amet inventore unde recusandae dolore ab
                        nostrum maiores aliquam, modi officia perspiciatis perferendis illum
                        optio quibusdam incidunt adipisci soluta.
                    </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-yellow-600 shadow-sm rounded-lg py-10 px-8 flex text-center hover:cursor-pointer"
                        >
                            <div className="flex flex-col w-full items-start text-start">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-100 h-100 rounded-full mb-4 border-2"
                                />
                                <h3 className="text-black text-lg font-bold mb-2">
                                    {review.name}
                                </h3>
                                <h4 className="text-gray-700 text-md">{review.content}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Review;