import React from "react";
import ImageComponent from "../Image";

export default function Partner(){
    return (
        <section className="pt-5 pb-5 d-flex align-items-center justify-content-center bg-light non-hero-section">
        <div className="container">
    
          <div className="row d-flex align-items-center justify-content-center">
            
            <div className="col-lg-6 col-sm-12" data-aos="fade-up">
              <h1>Partner with Unistacx for Unmatched Service Excellence</h1>
              <p className="text-start fw-normal">At Unistacx, we pride ourselves on being a trusted partner that delivers unmatched service excellence. When you choose us, you gain access to a team of experts with extensive industry experience and a deep understanding of your needs. We go beyond just providing services – we become your strategic partner, working collaboratively to drive your success. With our customized solutions, commitment to quality, timely delivery, and unwavering focus on customer satisfaction, we are the ideal choice for businesses looking to thrive in the digital landscape. Partner with Unistacx and experience the difference of working with a dedicated team that is passionate about helping you achieve your goals.
              </p>
              
            </div>
            <div className="col-lg-6 col-sm-12" data-aos="fade-up">
            <ImageComponent src={require(`../../assets/img/startup-rocket.png`)} alt="" blur_hash="L6HoI6_34n00?bIU00~qof_39FD%"/>
            </div>
          </div>
        </div>
      </section>
    );
}