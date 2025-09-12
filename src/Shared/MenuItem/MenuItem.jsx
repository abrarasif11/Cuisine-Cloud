import React from "react";

const MenuItem = ({ item }) => {
  const { price, name, image, recipe } = item;
  return (
    <div className="flex  gap-4">
      {/* Circle placeholder for image */}
      <div className=" flex-shrink-0">
        <img style={{borderRadius: '0 200px 200px'}} className="w-[100px]" src={image} alt="" />
      </div>
      {/* Text Section */}
      <div className="flex-1">
        <div className="flex items-center">
          <h3 className="text-sm font-semibold tracking-wide">{name}</h3>
          {/* Flexible dashed line */}
          <div className="flex-1 border-b border-dashed border-gray-400 mx-2"></div>
          <span className="text-yellow-600 font-semibold">{price}</span>
        </div>
        <p className="text-gray-600 text-sm mt-1">{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
