import React from "react";

export default function Hero(){
    return(
        <section className="about-hero p-2 mt-0">
        <div
          className="container service-container d-flex align-items-center justify-content-left ">
          <div className="div w-100">
            <h6 data-aos="fade-up" data-aos-delay="50" className="fs-5">WHO WE ARE</h6>
            <hr data-aos="fade-up" data-aos-delay="100"/>
            <h1 data-aos="fade-up" data-aos-delay="150" className=" about-header about-h fs-2">Redefining Possibilities in the Digital Landscape</h1>
            <h6 data-aos="fade-up" data-aos-delay="200">Unleashing Innovation, Driving Growth, and Transforming Businesses.</h6>
          </div>
        </div>
      </section>
    );
}