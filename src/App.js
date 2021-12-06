import React from "react";
// import reactDom from "react-dom";
import Slider from "react-slick";
import {Routes,Route} from 'react-router-dom'
import style from "./css/main.css";
import Header from "./components/Header";
import SliderText from "./components/SliderText";
import FooterTiki from "./components/FooterTiki";
import FooterTikiSub from "./components/FooterTikiSub";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductItem from "./pages/ProductItem";
import ShoppingCart from "./pages/ShoppingCart";
import LoginAndRegister from "./pages/LoginAndRegister.js";
import RegisterForm from "./pages/RegisterForm";
import DiscountDaily from "./pages/DiscountDaily";




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<SliderText />} /> 
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Product" element={<ProductList />} />
        <Route path="/Product-item" element={<ProductItem />} />
        <Route path="/Shopping-cart" element={<ShoppingCart />} />
        <Route path="/Register-login" element={<LoginAndRegister />} /> 
        <Route path="/Register-form" element={<RegisterForm />} /> 
        <Route path="/Discount-daily" element={<DiscountDaily />} /> 
      </Routes>
      <FooterTiki></FooterTiki>
      <Routes>
        <Route path="/" element={<FooterTikiSub />} /> 
      </Routes>
    </div>
  );
}

export default App;
