import React from "react";
import { useState,useEffect } from 'react'
import ContainerProductLeft from "../components/ContainerProductLeft";
import ContainerProductRight from "../components/ContainerProductRight";
// import ContainerProductRightSub from "../components/ContainerProductRightSub";

function ProductList() {
    
    
    return (
        <div className="containerProduct">
            <ContainerProductLeft></ContainerProductLeft>
            <ContainerProductRight></ContainerProductRight>
        </div>
    )
}

export default ProductList
