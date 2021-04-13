import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
  faClock,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const infosData = [
  {
    title: "Opening Hours",
    description: "We are Open 7 Days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit Our Location",
    description: "Brookly, NY 1000",
    icon: faMapMarkerAlt,
    background: "dark",
  },
  {
    title: "Call Us Now",
    description: "+88",
    icon: faPhone,
    background: "primary",
  },
];
const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row">
        {infosData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
