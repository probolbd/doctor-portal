import React from "react";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import tooth from "../../../images/tooth.png";
import ServicesDetail from "./ServicesDetail/ServicesDetail";
const serviceData = [
  { name: "Fluoride Treatment", img: fluoride },
  { name: "Cavity Filling", img: cavity },
  { name: "Teet Whitening", img: tooth },
];

const Services = () => {
  return (
    <section className="services-container">
      <div className="text-center mt-5">
        <h5 style={{ color: "#1cc7c1" }}>OUR SERVICES</h5>
        <h2>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5">
          {serviceData.map((service) => (
            <ServicesDetail service={service}></ServicesDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
