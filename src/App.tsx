import React from "react";
import Header from "./Header";
import ShowCase from "./ShowCase";
import Category from "./Category";
import NewArrival from "./NewArrival";
import ShippingFeature from "./ShippingFeature";
import News from "./News";
import Sponsor from "./Sponsor";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import MenProduct from "./Product";
import 'tippy.js/dist/tippy.css';

export default function App() {
  return (
    <>
      <Header />
      <ShowCase />
      <Category />
      <MenProduct />
      <NewArrival />
      <ShippingFeature />
      <News />
      <Sponsor />
      <Subscribe />
      <Footer />
    </>
  );
}
