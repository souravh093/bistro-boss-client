import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import coverBg from "../../assets/menu/banner3.jpg";
import { useMenu } from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";

const Menu = () => {
  const [menu, loading] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  if (loading) {
    return (
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-10">
      <Helmet>
        <title>Bistro Boos | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover
        bg={coverBg}
        title={"OUR MENU"}
        des={`WOULD YOU LIKE TO TRY A DISH`}
      />
      <SectionTitle subHeading={"Don't Miss"} heading={"Todays's Offer"} />
      {/* offered menu items */}
      <MenuCategory items={offered} />
      {/* dessert menu items */}
      <MenuCategory
        items={dessert}
        title={"dessert"}
        bg={dessertBg}
        des={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
      />
      {/* pizza menu items */}
      <MenuCategory
        items={pizza}
        title={"pizza"}
        bg={pizzaBg}
        des={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
      />
      {/* soup menu items */}
      <MenuCategory
        items={soup}
        title={"soup"}
        bg={soupBg}
        des={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
      />
      {/* salads menu items */}
      <MenuCategory
        items={salad}
        title={"salads"}
        bg={saladBg}
        des={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
      />
    </div>
  );
};

export default Menu;
