import React from "react";
import { Link } from "react-router-dom";
import ImageComponent from "../Image";
export default function About3() {
  return (
    <section data-aos="fade-up" className="d-flex bg-light align-items-center pt-3 pb-5" id="about">
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row align-items-center vertical-align-middle">
          <div data-aos="fade-up" className="col-lg-6 col-sm-12 d-flex about-img align-items-center justify-content-center">
            <ImageComponent
              src={require(`../../assets/img/about3_startup.jpg`)}
              blur_hash="LKRfqVof~Ta}%Ls.WCIq_0ay9aof"              
            />
          </div>
          <div className="col-lg-6 col-sm-12 d-flex about-img align-items-center justify-content-center">
            <div style={{ textAlign: "left" }}>
              <h1 data-aos="fade-up" className="mb-2">Elevating Startup Growth</h1>
              <h5 data-aos="fade-up" className="mb-2">Experience the Advantages of Partnering with UniStacx.</h5>
              <p data-aos="fade-up" className="mb-2">
                Partnering with UniStacx means unlocking the potential of your
                startup. Our tailored solutions fuel scalability, ensuring
                effortless growth as you expand your customer base.
              </p>
              <Link data-aos="fade-up" className="btn btn-cta" to={`/contact`}>Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
