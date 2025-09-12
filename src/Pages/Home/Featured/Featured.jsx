import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
  return (
    <div className="featured-items mb-20">
      <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 text-white">
          <p>September 12, 2025</p>
          <p className="uppercase">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn mt-5 btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
