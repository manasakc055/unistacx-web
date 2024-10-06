import React from "react";
import { Link } from "react-router-dom";
import ImageComponent from "../Image";
export default function About() {
  return (
    <section className="d-flex align-items-center  mt-0 pt-5 pb-5" id="about">
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row align-items-center vertical-align-middle">
          <div className="col-lg-6 col-sm-12 d-flex about-img align-items-center justify-content-center mb-4">
            <ImageComponent data-aos="fade-up"
              src={require(`../../assets/img/about_startup.jpg`)}
              alt=""
              blur_hash="LZMtQ{D%ROD%~qs8oeoJxaRknhV@"
            />
          </div>
          <div className="col-lg-6 col-sm-12 d-flex about-img align-items-center justify-content-center">
            <div style={{ textAlign: "left" }}>
              <h1 data-aos="fade-up">Empowering Startups with Innovative Solutions</h1>
              <h5 data-aos="fade-up">Fueling Growth and Success for Startups</h5>
              <p data-aos="fade-up">
                At UniStacx, we are dedicated to empowering startups with
                innovative solutions that fuel their growth and pave the way for
                their success. We understand the unique challenges and
                opportunities that startups face, and our comprehensive range of
                services is specifically designed to cater to their needs. From
                web and mobile app development to branding and identity, we
                offer a holistic approach to help startups establish a strong
                online presence, engage their target audience, and differentiate
                themselves in the competitive market. With our expertise and
                commitment to excellence, we strive to be the trusted technology
                partner for startups, supporting them at every step of their
                journey towards success.
              </p>
              
              <Link data-aos="fade-up" data-aos-offset="50" to="/contact" className="btn mt-2 btn-cta">
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
