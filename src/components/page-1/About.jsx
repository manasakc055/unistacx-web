import React from "react";
import { Link } from "react-router-dom";
import ImageComponent from "../Image";
export default function About() {
    
return (
    <section className="d-flex align-items-center non-hero-section py-3" id="about">
        <div className="container d-flex align-items-center justify-content-center">
            <div className="row align-items-center vertical-align-middle">
                <div className="col-lg-6 col-sm-12 d-flex about-img align-items-center justify-content-center"
                    data-aos="fade-up">
                    <ImageComponent src={require(`../../assets/img/about-img.png`)} style={{ width: "100%" }}
                    blur_hash="L8MHAW,t1:$q0i?v9Y4o2}4-@*%f"
                    />
                </div>
                <div className="col-lg-6 col-sm-12 d-flex about-img align-items-center justify-content-center">
                    <div style={{ textAlign: "left" }}>
                        <h2 data-aos="fade-up">
                            Crafting Digital Experiences that Inspire and Delight
                        </h2>
                        <p data-aos="fade-up">
                            Discover the transformative power of partnering with UniStacx.
                            Experience personalized solutions that amplify your digital
                            presence, engage your audience, and drive measurable results.
                            With our collaborative approach and deep industry expertise, we
                            empower your business to thrive in the digital realm, unleashing
                            its true potential and captivating your customers at every
                            touchpoint.
                        </p>
                        <ul>
                            <li data-aos="fade-up" className="mb-3 d-flex" data-aos-delay="100">
                                <i className="bi bi-bar-chart-fill l-icon me-2" style={{ color: "orange" }}></i>
                                <div>
                                    
                                    <strong>Amplify Your Digital Presence:</strong>
                                    &nbsp;Stand out from the competition with engaging and
                                    impactful online experiences.
                                </div>
                            </li>
                            <li data-aos="fade-up" className="mb-3 d-flex" data-aos-delay="250">
                                <i className="bi bi-people-fill l-icon me-2" style={{ color: "orangered" }}></i>
                                <div>
                                    
                                    <strong>Engage Your Audience:</strong>
                                    &nbsp;Captivate your target audience and create meaningful
                                    connections through user-centric design and intuitive
                                    interfaces.
                                </div>
                            </li>
                            <li data-aos="fade-up" className="mb-3 d-flex" data-aos-delay="400">
                                <i className="bi bi-gear-fill l-icon me-2"></i>{" "}
                                <div>
                                    
                                    <strong>Personalized Solutions:</strong>
                                    &nbsp;Tailored digital solutions designed to meet your
                                    specific goals and challenges.
                                </div>
                            </li>
                        </ul>
                        <Link to="/who-we-are" data-aos="fade-up" data-aos-delay="400" className="btn mt-2 btn-cta">
                        Read more
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
}