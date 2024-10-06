import React from "react";
import Data from "./Data";
import { Link } from "react-router-dom";
export default function CTA(props) {
  const { cta_header, cta_sub_header } = Data[props.service];
  return (
    <section className=" p-5 mt-5 cta-section service-cta" data-aos="fade-up">
      <div className="container" data-aos="fade-up">
        <h1 data-aos = "fade-up">{cta_header}</h1>
        <p data-aos = "fade-up">{cta_sub_header}</p> 
        <Link data-aos = "fade-up" to="/contact" className="btn cta-btn-2">
          Let's talk
        </Link>
      </div>
    </section>
  );
}
