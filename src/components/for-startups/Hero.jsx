import React from "react";

export default function Hero(){
    return(
        <section className="for-startup-hero p-2">
        <div
          className="container about-container d-flex align-items-center justify-content-left align-items-center vertical-align-middle">
          <div className="div w-100">
            <h5 data-aos="fade-up" >FOR STARTUPS</h5>
            <hr data-aos="fade-up" data-aos-delay="50"/>
            <h1 data-aos="fade-up" data-aos-delay="100" className="about-header">Accelerate Your Startup's Growth</h1>
            <h6 data-aos="fade-up" data-aos-delay="150">Unlock the potential of your startup with our strategic growth solutions.</h6>
          </div>
        </div>
      </section>
    );
}