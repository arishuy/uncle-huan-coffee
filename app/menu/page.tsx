import Image from "next/image";

// Dữ liệu menu mẫu
const menuItems = [
    {
        id: 1,
        name: "Cappuccino",
        description: "Rich espresso with steamed milk and foam.",
        price: "$4.50",
        image:
            "https://res.cloudinary.com/dizm6unn4/image/upload/v1733105793/Huancafe/ovck7yqgrchwpuusxutb.jpg",
    },
    {
        id: 2,
        name: "Latte",
        description: "Smooth espresso with creamy milk.",
        price: "$5.00",
        image:
            "https://res.cloudinary.com/dizm6unn4/image/upload/v1733105793/Huancafe/xl5jyphnzgzbzn3hfzbt.jpg",
    },
    {
        id: 3,
        name: "Mocha",
        description: "Espresso with chocolate and steamed milk.",
        price: "$5.50",
        image:
            "https://res.cloudinary.com/dizm6unn4/image/upload/v1733105793/Huancafe/wbi0xolbn9opyn2bfslg.jpg",
    },
    {
        id: 4,
        name: "Americano",
        description: "Espresso with hot water.",
        price: "$3.50",
        image:
            "https://res.cloudinary.com/dizm6unn4/image/upload/v1733105793/Huancafe/iouhagdlrjk6ncgersmq.jpg",
    },
    {
        id: 5,
        name: "Americano",
        description: "Espresso with hot water.",
        price: "$3.50",
        image:
            "https://res.cloudinary.com/dizm6unn4/image/upload/v1733105793/Huancafe/n06aknoewbdbngjypyqu.jpg",
    },
    {
        id: 6,
        name: "Americano",
        description: "Espresso with hot water.",
        price: "$3.50",
        image:
            "https://res.cloudinary.com/dizm6unn4/image/upload/v1733105793/Huancafe/slolar0mz8qgunjpyviv.jpg",
    },
    {
        id: 7,
        name: "Americano",
        description: "Espresso with hot water.",
        price: "$3.50",
        image:
            "https://res.cloudinary.com/dizm6unn4/image/upload/v1733105793/Huancafe/indpf1engawuax6u9amr.jpg",
    },
    {
        id: 8,
        name: "Americano",
        description: "Espresso with hot water.",
        price: "$3.50",
        image:
            "https://res.cloudinary.com/dizm6unn4/image/upload/v1733105793/Huancafe/indpf1engawuax6u9amr.jpg",
    },
];
function page() {
    return (
        <div id="menu" className="bg-yellow-600 py-10 ">
            <div className="container mx-auto px-6 lg:px-16">
                <h3 className="text-main text-2xl text-center font-semibold mb-2">
                    MENUS
                </h3>
                <h2 className="text-black text-4xl font-bold text-center mb-2">
                    OUR <span className="text-yellow-800">SPECIAL</span> MENUS
                </h2>
                <div className="flex items-center justify-center mb-8">
                    <h4 className="text-center text-wrap w-1/2 text-black">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Praesentium nemo facilis amet inventore unde recusandae dolore ab
                        nostrum maiores aliquam, modi officia perspiciatis perferendis illum
                        optio quibusdam incidunt adipisci soluta.
                    </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {menuItems.map((item) => (
                        <div
                            key={item.id}
                            className="relative bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg h-80"
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                                width={300}
                                height={300}
                            />

                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                                <h3 className="text-lg font-bold">{item.name}</h3>
                                <p className="text-sm truncate">{item.description}</p>
                                <span className="text-md font-semibold">{item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="py-16">
                    <h2 className="text-red-950 text-4xl font-bold text-center mb-2">
                        FOOD MENU
                    </h2>
                    <Image
                        src="https://res.cloudinary.com/dizm6unn4/image/upload/v1733105793/Huancafe/tsk5exqd325uownwdeic.jpg"
                        alt="menu-drink"
                        width={1500}
                        height={1000}
                    />
                    <h2 className="text-yellow-100 text-4xl font-bold text-center mb-2 pt-16">
                        DRINK LIST
                    </h2>
                    <Image
                        src="https://res.cloudinary.com/dizm6unn4/image/upload/v1733105793/Huancafe/v6tdhm7fnjakcmf7wbsn.jpg"
                        alt="menu-drink"
                        width={1500}
                        height={1000}
                    />
                    <Image
                        src="https://res.cloudinary.com/dizm6unn4/image/upload/v1733105793/Huancafe/xzqkb0tb0jl1e16wucjp.jpg"
                        alt="menu-drink"
                        width={1500}
                        height={1000}
                    />
                </div>
            </div>
        </div>
    );
}

export default page;