import React from "react";

export default function Hero(){
    return(
        <section className="our-approach-hero p-2">
        <div
          className="container about-container d-flex align-items-center justify-content-left align-items-center vertical-align-middle">
          <div className="div w-100">
            <h5  data-aos = "fade-up">Our Approach</h5>
            <hr  data-aos = "fade-up" data-aos-delay="50"/>
            <h1  data-aos = "fade-up" data-aos-delay="100" className="about-header">Transforming Ideas into Reality: Our Proven Approach</h1>
            <h6  data-aos = "fade-up" data-aos-delay="150">Efficient and Collaborative Process for Successful Project Delivery.</h6>
          </div>
        </div>
      </section>
    )
}