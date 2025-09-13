import React from "react";

const FoodCard = ({item}) => {
    const {name , image, price, recipe} = item;
  return (
    <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <p className="text-center font-semibold text-xl pt-10"> Price : {price} $</p>
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl text-center font-semibold tracking-wide">
            {name}
          </h2>
          <p className="text-gray-800 text-center">
            {recipe}
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-600 text-gray-50"
        >
         Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
