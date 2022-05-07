import React from "react";
import Categories from "../component/Categories"
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Products from "../component/Products"


const Home = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <Products/>
      <Footer/>
    </div>
  );
};

export default Home;