import React, { useState, useEffect } from "react";

function Carousel({ carouselData }) {
  const [carouselCount, setCarouselCount] = useState(0);

  function carouselChange(event) {
    const { name } = event.target;
    setCarouselCount(parseInt(name));
    event.currentTarget.blur();
  }

  function carouselNext(event) {
    setCarouselCount((prevCarouselCount) => {
      return (prevCarouselCount + 1) % carouselData.length;
    });
    event && event.currentTarget.blur();
  }

  function carouselPrevious(event) {
    setCarouselCount(
      (carouselCount + carouselData.length - 1) % carouselData.length
    );
    event.currentTarget.blur();
  }

  useEffect(() => {
    const intervalID = setInterval(() => {
      carouselNext();
    }, 6000);
    return () => clearInterval(intervalID);
  }, []);

  const carouselNavButtons = carouselData.map((carouselItem, index) => (
    <button
      className={
        "carouselNavButton" +
        " " +
        (carouselCount == index ? "carouselNavButtonActive" : "")
      }
      onClick={carouselChange}
      name={index}
      key={carouselItem.src}
    ></button>
  ));

  return (
    <div class="carouselContainer">
      <button
        className="carouselSideButton carouselLeft"
        onClick={carouselPrevious}
      ></button>
      <img
        className="carouselImage"
        src={carouselData[carouselCount].src}
        alt={carouselData.alt}
      />
      <div
        class={
          "carouselInfo" +
          " " +
          (carouselData[carouselCount].bgDark && "carouselInfoLight")
        }
      >
        <div class="carouselText">
          <h1 className="carouselHeading">
            {carouselData[carouselCount].heading}
          </h1>
          <p className="carouselParagraph">
            {carouselData[carouselCount].text}
          </p>
        </div>

        <a
          className="carouselShopNowButton"
          href={carouselData[carouselCount].url}
        >
          Shop now
        </a>
      </div>
      <button
        className="carouselSideButton carouselRight"
        onClick={carouselNext}
      ></button>
      <nav class="carouselNavButtonsContainer">{carouselNavButtons}</nav>
    </div>
  );
}

export default Carousel;
