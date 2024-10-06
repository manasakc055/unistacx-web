import React from "react";
import ImageComponent from "../Image";
export default function About2() {
  return (
    <section className="d-flex align-items-center  mt-5 pt-5 pb-5" id="about">
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row align-items-center vertical-align-middle">
          <div className="col-lg-6 col-sm-12 d-flex about-img align-items-center justify-content-center">
            <div style={{ textAlign: "left" }}>
              <h1 data-aos="fade-up" className="mb-2">Unlock Startup Success with UniStacx</h1>
              <p data-aos="fade-up" className="mb-4">
                At UniStacx, we understand the unique challenges and aspirations
                of startups. We are dedicated to providing comprehensive
                solutions that propel startups towards success. Here's how
                partnering with UniStacx can benefit your startup:
              </p>
              <ul>
                <li className="d-flex mb-3" data-aos="fade-up" data-aos-delay="100" >
                <i className="bi bi-person-fill-gear me-2 l-icon" style={{fontSize:"25px",color:""}}></i>
                  <div><strong>Tailored Solutions:</strong> We customize our services to meet your specific needs, ensuring alignment with your startup's goals.</div>
                </li>
                <li className="d-flex mb-3" data-aos="fade-up" data-aos-delay="250" >
                <i className="bi bi-stopwatch-fill me-2 l-icon" style={{color:"orangered"}}></i>
                  <div><strong>Accelerated Time-to-Market:</strong> We expedite your time-to-market with agile methodologies and efficient workflows.</div>
                </li>
                <li className="d-flex mb-3" data-aos="fade-up" data-aos-delay="300" >
                <i className="bi bi-box-arrow-up-right me-2 l-icon" style={{color:"indigo"}}></i>
                  <div><strong>Scalability and Flexibility:</strong> Our solutions scale and adapt to your growing business requirements.</div>
                </li>
                <li className="d-flex mb-3" data-aos="fade-up" data-aos-delay="450" >
                <i className="bi bi-people-fill me-2 l-icon" style={{color:"green"}}></i>
                  <div><strong>User-Centric Design:</strong> We create engaging and intuitive digital experiences that reflect your brand identity and enhance user satisfaction.</div>
                </li>
                <li className="d-flex mb-3" data-aos="fade-up" data-aos-delay="800" >
                <i className="bi bi-stack me-2 l-icon" style={{color:"goldenrod"}}></i>
                  <div><strong>Strategic Technology Stack:</strong> We leverage cutting-edge technologies to develop robust, secure, and scalable solutions.</div>
                </li>
              </ul>
            </div>
          </div>
          <div data-aos="fade-up" className="col-lg-6 col-sm-12 d-flex about-img align-items-center justify-content-center">
            <ImageComponent
              src={require(`../../assets/img/about2_startups.jpg`)}
              alt=""
              blur_hash="LFSidIESjD-o-mtSjZV@_N%0ozIo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
