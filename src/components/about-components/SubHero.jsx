import React from "react";
import { Link } from "react-router-dom";
import ImageComponent from "../Image";
export default function SubHero(){
    return(
        <section className="d-flex align-items-center justify-content-center non-hero-section pt-5 pb-5">
        <div className="container d-flex align-items-center justify-content-center">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-5  mb-2 col-sm-12 col-md-6  order-sm-1 order-md-1 order-2">
              <h2 data-aos="fade-up">
                Building a Future of Digital Excellence
              </h2>
              <p  data-aos="fade-up" className="text-start fw-normal">
                <strong>UniStacx</strong> is a full-service technology company that specializes in
                providing customized solutions to businesses of all sizes. Our
                comprehensive suite of services includes web and mobile application
                development, enterprise software, business automation, designs, and
                products. We pride ourselves on our ability to deliver custom
                solutions that are tailored to meet the unique needs of each 
                client.
              </p>
              <Link to="/contact" data-aos-offset="50" data-aos="fade-up" className="btn btn-cta">Let's
                talk</Link>
            </div>
            <div data-aos="zoom-in-up" className="col-lg-6 mb-4 col-sm-12 col-md-6 d-flex align-items-center justify-content-center order-sm-1 order-md-2 ">
              <ImageComponent 
              src={require('../../assets/img/who-we-are.webp')} 
              blur_hash="LqI5SpIUNGx]~qMxWBbI%MRiV@WB"
              />
            </div>
          </div>
        </div>
      </section>
    );
}