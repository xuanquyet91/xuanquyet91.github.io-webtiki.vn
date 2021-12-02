import React from "react";
import ContainerProductLeft from "../components/ContainerProductLeft";
import ContainerProductRight from "../components/ContainerProductRight";

function ProductList() {
    return (
        <div className="containerProduct">
            <ContainerProductLeft></ContainerProductLeft>
            <ContainerProductRight></ContainerProductRight>
        </div>
    )
}

export default ProductList
