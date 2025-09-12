import React from "react";
import bgImage from "../../../assets/home/chef-service.jpg";
const ChefBanner = () => {
  return (
    <div
      className="relative bg-cover mb-20 bg-center h-[400px] flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* White card */}
      <div className="bg-white text-center p-10 md:p-16 max-w-3xl mx-5 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-serif uppercase mb-4">
          Chef’s Special Service 🍽️
        </h2>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          At Bistro Boss, our chefs are more than just cooks they are passionate
          artisans dedicated to creating unforgettable dining experiences. Each
          dish is carefully crafted with the freshest ingredients, blending
          traditional flavors with modern techniques.
        </p>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">✨ Fresh ingredients, authentic recipes, and a chef’s passion in every bite.</p>
      </div>
    </div>
  );
};

export default ChefBanner;
