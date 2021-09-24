import React from "react";

const Image = ({ image }) => {
  return (
    <div>
      <img src={image} alt="funny cat" width="50%" />
    </div>
  );
};

export default Image;
