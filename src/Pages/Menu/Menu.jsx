import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import coverBg from "../../assets/menu/banner3.jpg";
import { useMenu } from "../../hooks/useMenu";

const Menu = () => {
  const [menu, loading] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>Bistro Boos | Menu</title>
      </Helmet>
      <Cover
        bg={coverBg}
        title={"OUR MENU"}
        des={`WOULD YOU LIKE TO TRY A DISH`}
      />
    </div>
  );
};

export default Menu;
