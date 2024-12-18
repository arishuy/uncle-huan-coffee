import CarouselDemo from "@/components/Carousel";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Menu from "@/components/Menu";
import Review from "@/components/Review";
import React from "react";

const page = () => {
  return (
    <div>
      <Home />
      <CarouselDemo />
      <Menu />
      <Review />
      <Contact />
    </div>
  );
};

export default page;