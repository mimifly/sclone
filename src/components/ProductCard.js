import React from "react";
import productsHomeData from "../productsHomeData";

function ProductCard({ productData }) {
  const savingText = productData.priceBefore && (
    <p className="productCardSavingText">
      Only £{productData.price.toFixed(2)}: Save £
      {(productData.priceBefore - productData.price).toFixed(2)}
    </p>
  );

  const sponsoredText = productData.sponsored && (
    <p className="productCardSponsoredText">Sponsored</p>
  );

  const deliveryText = productData.delivery && (
    <p className="productCardDeliveryText">
      Delivery by {productData.delivery}
    </p>
  );

  return (
    <div className="productCardContainer">
      {savingText}
      {sponsoredText}
      <img className="productCardImage" src={productData.src} />
      <a href="#">
        <p className="productCardNameText">{productData.name}</p>
      </a>
      <p className="productCardPriceText">
        <span>£{productData.price.toFixed(2)}</span>/unit
      </p>
      <button className="productCardButton">Add</button>
      {deliveryText}
    </div>
  );
}

export default ProductCard;
