import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";
import CallNow from "./CallNow/CallNow";
import Recommends from "./Recommends/Recommends";
import Feature from "./Feature/Feature";
import Testimonials from "./Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import coverBG from "../../assets/home/chef-service.jpg";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boos | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <Cover
        bg={coverBG}
        title={"Bistro Boss"}
        des={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, atque debitis ipsum nobis quaerat aliquid excepturi error similique nostrum illo dicta corrupti culpa. Rem minima aspernatur dolores ducimus sed ipsa pariatur a! Cum consectetur, nesciunt pariatur quia voluptas deserunt. Vel nesciunt minus in quaerat ad praesentium corporis voluptatum odit exercitationem!`}
      />
      <PopularMenu />
      <CallNow />
      <Recommends />
      <Feature />
      <Testimonials />
    </div>
  );
};

export default Home;
