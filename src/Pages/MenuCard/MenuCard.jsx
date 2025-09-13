import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const MenuCard = () => {
  return (
    <section>
      <SectionTitle subHeading={"Should Try"} heading={"CHEF RECOMMENDS"} />
      <div className="max-w-xs  rounded-md shadow-md bg-gray-50 text-gray-800">
        <img
          src="https://source.unsplash.com/random/300x300/?2"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 "
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              Donec lectus leo
            </h2>
            <p className="text-gray-800">
              Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <button className="btn rounded-xl border-b-4 btn-outline">
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuCard;
