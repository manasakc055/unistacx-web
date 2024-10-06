import React from "react";

export default function Feature(props) {
    const {heading,description} = props;
  return (
    <div className="col-lg-3 m-4 p-3 text-center csd-card bg-white" data-aos="fade-up">
      <h5>{heading}</h5>
      <p style={{fontSize:"small"}}>{description}</p>
    </div>
  );
}