import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";
import Services from "./Services/Services";
import CallNow from "./CallNow/CallNow";
import Recommends from "./Recommends/Recommends";
import Feature from "./Feature/Feature";
import Testimonials from "./Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boos | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <Services />
      <PopularMenu />
      <CallNow />
      <Recommends />
      <Feature />
      <Testimonials />
    </div>
  );
};

export default Home;
