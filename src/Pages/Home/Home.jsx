import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefBanner from "./ChefBanner/ChefBanner";
import PopularMenu from "./PopularMenu/PopularMenu";
import Featured from "./Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import CallUs from "../CallUs/CallUs";
import MenuCard from "../MenuCard/MenuCard";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <ChefBanner />
      <PopularMenu />
      <CallUs />
      <MenuCard/>
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
