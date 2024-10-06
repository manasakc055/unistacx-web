import React from "react";
import ImageComponent from "../Image";

export default function Values(){
    return (
        <section className="pt-5 pb-5 d-flex align-items-center justify-content-center non-hero-section">
        <div className="container">
    
          <div  className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-6 col-sm-12" data-aos="fade-up">
              <ImageComponent 
              src={require(`../../assets/img/teamwork-power-successful-business-meeting-workplace-concept.jpg`)}
              blur_hash="LFN^PWMJyETL^%xA_29FTy?wMciv"
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <h1 data-aos="fade-up" data-aos-offset="100">Our Values and Philosophy</h1>
              <p data-aos="fade-up" className="text-start fw-normal">We believe in the power of innovation, collaboration, and client-centricity. These core values
                shape everything we do and are deeply embedded in our company's DNA.
              </p>
              <ul>
                <li data-aos="fade-up" data-aos-delay="100">
                  <div className="d-flex">
                  <img src={require(`../../assets/icons/innovation.png`)} alt="" className="l-icon me-2"/>
                  <p className="text-start fw-normal"><strong>Innovation:</strong> We embrace the ever-evolving digital landscape and stay at the forefront of
                  technology trends. We are passionate about finding creative and ingenious solutions that drive business
                  growth and deliver exceptional user experiences.</p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                <div className="d-flex">
                <img src={require(`../../assets/icons/value.png`)} alt="" className="l-icon me-2"/>

                  <p className="text-start fw-normal"><strong>Client-Centricity:</strong> Our clients are at the heart of everything we do. We prioritize
                  their needs, aspirations, and business objectives. By truly understanding their vision, we develop
                  customized strategies and solutions that address their specific requirements. We are dedicated to building
                  long-lasting relationships and delivering measurable value to our clients' businesses.
                  </p>
                  </div></li>
                <li data-aos="fade-up" data-aos-delay="300">
                <div className="d-flex">
                <img src={require(`../../assets/icons/trust.png`)} alt="" className="l-icon me-2"/>
                  <p className="text-start fw-normal"><strong>Integrity and Ethics:</strong> We operate with the highest level of integrity and ethical
                  standards. Honesty, transparency, and trust are the foundation of our relationships, both internally and
                  externally. We are committed to maintaining confidentiality, respecting intellectual property rights, and
                  upholding the privacy and security of our clients' data.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
}