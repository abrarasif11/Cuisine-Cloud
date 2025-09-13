import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Cuisine Cloud | Menu </title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu" />
      {/* Main Cover  */}
      <div className="mb-20">
        <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"} />
        <MenuCategory items={offered} />
      </div>
      {/* dessert cover */}
      <div className="mb-20">
        <MenuCategory items={dessert} title="Dessert" img={dessertImg} />
      </div>
      {/* Pizza Cover */}
      <div className="mb-20">
        <MenuCategory items={pizza} title="Pizza" img={pizzaImg} />
      </div>
      {/* Salad Cover */}
      <div className="mb-20">
        <MenuCategory items={salad} title="Salad" img={saladImg} />
      </div>
      {/* Soup Cover */}
      <div className="mb-20">
        <MenuCategory items={soup} title="Soup" img={soupImg} />
      </div>
    </div>
  );
};

export default Menu;
