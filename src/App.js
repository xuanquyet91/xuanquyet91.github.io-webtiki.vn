import React from "react";
import reactDom from "react-dom";
import Slider from "react-slick";
import {Routes,Route,Link} from 'react-router-dom'
import style from "./css/main.css";
import Header from "./components/Header";
import SliderText from "./components/SliderText";
import FooterTiki from "./components/FooterTiki";
import FooterTikiSub from "./components/FooterTikiSub";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";




function App() {
  return (
    <div className="App">
      <Header></Header>
      <SliderText></SliderText>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Product" element={<ProductList />} />
      </Routes>
      <FooterTiki></FooterTiki>
      <Routes>
        <Route path="/" element={<FooterTikiSub />} /> 
      </Routes>

    </div>
  );
}

export default App;
