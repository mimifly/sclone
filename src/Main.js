import React from "react";
import Carousel from "./components/Carousel";
import carouselData from "./carouselData";
import CardSmall from "./components/CardSmall";
import ProductCard from "./components/ProductCard";
import productsHomeData from "./productsHomeData";

function Main() {
  const productsHomeAll = productsHomeData.map((productData) => (
    <ProductCard key={productData.name} productData={productData} />
  ));
  return (
    <div className="mainContentWrapper">
      <Carousel carouselData={carouselData} />

      <h1 className="headingMain">Shop by category</h1>

      <div className="cardSmallRow">
        <CardSmall
          text="Fruit & veg"
          src="./card-small/fruit-and-veg.png"
          url="#"
        />
        <CardSmall
          text="Meat & Fish"
          src="./card-small/meat-and-fish.png"
          url="#"
        />
        <CardSmall
          text="Food cupboard"
          src="./card-small/food-cupboard.jpg"
          url="#"
        />
        <CardSmall text="Household" src="./card-small/household.png" url="#" />
      </div>

      <h1 className="headingMain">Watch the sport</h1>
      <div className="productDisplayHome">{productsHomeAll}</div>
    </div>
  );
}

export default Main;
