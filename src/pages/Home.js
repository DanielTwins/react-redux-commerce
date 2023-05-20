import React from "react";
import ProductList from "../components/../containers/productList/ProductList";
import HeroCarousel from "../components/HeroCarousel";

const Home = () => {

  const spacing = { padding: "4rem 0" };


  return (
    <>
      <div style={spacing}>
        <HeroCarousel />
      </div>
      <ProductList />
      <div style={{ height: "10rem" }} />
    </>
  );
};

export default Home;
