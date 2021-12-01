import React from "react";
import reactDom from "react-dom";
import Slider from "react-slick";
import style from "./css/main.css";
import Header from "./components/Header";
import SliderText from "./components/SliderText";
import SliderCoupon from "./components/SliderCoupon";
import FlashDeal from "./components/FlashDeal";
import BannerSaleOne from "./components/BannerSaleOne";
import ProductIconOne from "./components/ProductIconOne";
import BannerSaleTwo from "./components/BannerSaleTwo";
import SliderCouponOne from "./components/SliderCouponOne";
import BannerSaleThird from "./components/BannerSaleThird";
import ProductIconTwo from "./components/ProductIconTwo";
import ShoppingTrends from "./components/ShoppingTrends";
import BannerSaleFour from "./components/BannerSaleFour";
import SuggestionsTiki from "./components/SuggestionsTiki";
import ProductListTiki from "./components/ProductListTiki";
import FooterTiki from "./components/FooterTiki";
import FooterTikiSub from "./components/FooterTikiSub";



function App() {
  return (
    <div className="App">
      <Header></Header>
      <SliderText></SliderText>
      <div className="container">
        <SliderCoupon></SliderCoupon>
        <FlashDeal></FlashDeal>
        <BannerSaleOne></BannerSaleOne>
        <ProductIconOne></ProductIconOne>
        <BannerSaleTwo></BannerSaleTwo>
        <SliderCouponOne></SliderCouponOne>
        <BannerSaleThird></BannerSaleThird>
        <ProductIconTwo></ProductIconTwo>
        <ShoppingTrends></ShoppingTrends>
        <BannerSaleFour></BannerSaleFour>
        <SuggestionsTiki></SuggestionsTiki>
        <ProductListTiki></ProductListTiki>
      </div>
      <FooterTiki></FooterTiki>
      <FooterTikiSub></FooterTikiSub>
    </div>
  );
}

export default App;
