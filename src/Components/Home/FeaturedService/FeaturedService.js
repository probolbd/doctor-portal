import React from "react";
import feature from "../../../images/feturedService.png";
const FeaturedService = () => {
  return (
    <section
      style={{ height: "600px" }}
      className="row d-flex align-items-center"
    >
      <div className="col-md-4 offset-md-1">
        <img src={feature} alt="" className="img-fluid" />
      </div>
      <div className="col-md-5">
        <h2 style={{ color: "#3a4256" }}>
          Exceptional Dental <br /> Care, On your Terms
        </h2>
        <p className="text-secondary text-justify mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          fugiat minus expedita neque fugit voluptatibus!Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Nesciunt fugiat minus expedita
          neque fugit voluptatibus!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nesciunt fugiat minus expedita neque fugit
          voluptatibus!
        </p>
        <button className="btn-dark text-white"> Learn More</button>
      </div>
    </section>
  );
};

export default FeaturedService;
