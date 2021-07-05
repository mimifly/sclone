import React from "react";

function CardSmall({ text, src, url }) {
  return (
    <div className="cardSmall">
      <a href={url}>
        <img className="cardSmallImage" src={src} alt={text} />
      </a>
      <h2 className="headingCardSmall">{text}</h2>
    </div>
  );
}

export default CardSmall;
