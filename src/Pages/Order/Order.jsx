import React, { useState } from "react";
import orderCvrImg from "../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../Shared/FoodCard/FoodCard";
import OrderTab from "../../Shared/OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const [index, setIndex] = useState(0);
  const [menu] = useMenu();
  const { category } = useParams();
  
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Cover img={orderCvrImg} title={"OUR SHOP"} />
      <Tabs defaultIndex={index} onSelect={(index) => setIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad} />
        </TabPanel>
        <TabPanel>
        <OrderTab items={pizza} />
        </TabPanel>
        <TabPanel>
        <OrderTab items={soup} />
        </TabPanel>
        <TabPanel>
        <OrderTab items={dessert} />
        </TabPanel>
        <TabPanel>
        <OrderTab items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
