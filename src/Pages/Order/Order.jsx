import React, { useState } from "react";
import orderImg from "../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useMenu } from "../../hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boos | Order Food</title>
      </Helmet>

      <Cover
        bg={orderImg}
        title={"ORDER FOOD"}
        des={"WOULD YOU LIKE TO TRY A DISH"}
      />
      <Tabs
        className="mx-auto max-w-full my-24 flex flex-col gap-10"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="flex justify-center">
          <Tab className="p-4 outline-none border-b-2 cursor-pointer border-transparent hover:border-orange-500 hover:text-orange-500 focus:text-orange-500">
            SALAD
          </Tab>
          <Tab className="p-4 outline-none border-b-2 cursor-pointer border-transparent hover:border-orange-500 hover:text-orange-500 focus:text-orange-500">
            PIZZA
          </Tab>
          <Tab className="p-4 outline-none border-b-2 cursor-pointer border-transparent hover:border-orange-500 hover:text-orange-500 focus:text-orange-500">
            SOUPS
          </Tab>
          <Tab className="p-4 outline-none border-b-2 cursor-pointer border-transparent hover:border-orange-500 hover:text-orange-500 focus:text-orange-500">
            DESSERT
          </Tab>
          <Tab className="p-4 outline-none border-b-2 cursor-pointer border-transparent hover:border-orange-500 hover:text-orange-500 focus:text-orange-500">
            DRINKS
          </Tab>
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
