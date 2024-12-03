import FlipImage from "@/components/FlipImage";
import Link from "next/link";

const menuImg = {
    drinkFront:
        "https://res.cloudinary.com/dizm6unn4/image/upload/v1733105793/Huancafe/v6tdhm7fnjakcmf7wbsn.jpg",
    drinkBack:
        "https://res.cloudinary.com/dizm6unn4/image/upload/v1733105793/Huancafe/xzqkb0tb0jl1e16wucjp.jpg",
    foodFront:
        "https://res.cloudinary.com/dizm6unn4/image/upload/v1733105793/Huancafe/qpxep33x2hiqnmtx5wdp.jpg",
    foodBack:
        "https://res.cloudinary.com/dizm6unn4/image/upload/v1733105793/Huancafe/tsk5exqd325uownwdeic.jpg",
};
function Menu() {
    return (
        <div id="menu" className="bg-yellow-600 py-10 h-screen">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-60">
                    <FlipImage image1={menuImg.drinkFront} image2={menuImg.drinkBack} />
                    <FlipImage image1={menuImg.foodFront} image2={menuImg.foodBack} />
                </div>
                <div className="text-center mt-60">
                    <Link
                        href="/menu"
                        className="px-6 py-3 bg-yellow-500 text-main rounded-lg hover:bg-yellow-400 transition duration-300 font-semibold"
                    >
                        Explore Menu
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Menu;