import React from "react";
import { Link } from "react-router-dom";
import ImageComponent from "../Image";
export default function SubHero() {
  return (
    <section
      className=" mt-5 pb-5 d-flex align-items-center justify-content-center non-hero-section"
      style={{ minHeight: "60vh" }}
    >
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-5  mb-2 col-sm-12 col-md-6">
            <h1 data-aos="fade-up">Streamlined Project Workflow</h1>
            <h5 data-aos="fade-up">From Concept to Delivery.</h5>
            <p data-aos="fade-up">
              At Unistacx, we follow a well-defined and structured approach to
              ensure the seamless execution of every project. Our streamlined
              project workflow encompasses every stage, from conceptualization
              to final delivery. We collaborate closely with our clients,
              leveraging our expertise and industry best practices to deliver
              exceptional results. Our goal is to exceed client expectations and
              create innovative solutions that drive success.
            </p>
            <Link to="/contact" className="btn btn-cta" data-aos="fade-up" data-aos-offset="80">
              Let's talk
            </Link>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6 d-flex align-items-center justify-content-center" data-aos="fade-up">
            <ImageComponent
             src={require(`../../assets/img/Component 18.jpg`)} style={{maxWidth:"60%"}}
             blur_hash="L5S$fX;H.6~9%4rsYPuP%OJ=.mPW"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
