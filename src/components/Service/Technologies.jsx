import React from "react";
import Data from "./Data";
import TechIcons from "./TechIcons";
export default function Technologies(props) {
  const {
    technology_heading,
    technology_description,
    technology_sub_heading,
    technology_list,
  } = Data[props.service];
  let i = 1;
  let tech_list = technology_list.map((item) => (
    <TechIcons key={item} img={item} delay={`${i++}00`} />
  ));
  return (
    <section className="mt-5 mb-5">
      <div className="container">
        <h1 data-aos="fade-up">{technology_heading}</h1>
        <p data-aos="fade-up">{technology_description}</p>
        <h4 data-aos="fade-up">{technology_sub_heading}</h4>
      </div>
      <div className="container text-container my-3">
        <div className="row g-4">
            {tech_list}
        </div>
      </div>
    </section>
  );
}
