import React from "react";
import { Link } from "react-router-dom";
export default function Services(){
    return(
        <section id="services" className="d-flex align-items-center bg-light mt-5 pt-5 pb-5 non-hero-section">
            <div className="container">
                <h2 data-aos="fade-up" className="text-left">Our Comprehensive Services</h2>
                <p data-aos="fade-up">
                Our comprehensive services are tailored to address your unique needs and drive your
                business forward. From innovative web and mobile solutions to strategic consulting 
                and digital marketing, we have the expertise to unlock your potential and help you 
                thrive in the digital landscape.
                </p>
                <div className="row align-items-center justify-content-center verticla-align-middle text-center" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-4 p-5 col-md-5 col-sm-9 p-3 service-card align-items-center justify-content-center">
                        <img className="text-center" src={require(`../../assets/icons/coding (2).png`)} width="60px" alt=""/>
                        <h4 className="text-center">Web Development</h4>
                        <p className="service-para">
                        Powering your digital presence with dynamic web solutions. From responsive designs to robust backend
                        development, our web development expertise ensures your website is visually stunning and optimized for
                        performance. 
                        </p>
                        <Link to="/web-application-development">Read more <i className="bi bi-arrow-right"></i></Link>
                    </div>
                    
                    <div className="col-lg-4 p-5 col-md-5 col-sm-9 p-3 service-card align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="200">
                        <img className="text-center" src={require(`../../assets/icons/mobile-app.png`)} width="60px" alt=""/>
                        <h4 className="text-center">Mobile App Development</h4>
                        <p className="service-para">
                        Transforming ideas into captivating mobile experiences. Our mobile app development solutions combine
                        innovation, functionality, and seamless user experiences to drive your business forward.
                        </p>
                        <Link to="/mobile-application-development">Read more <i className="bi bi-arrow-right"></i></Link>
                    </div>

                    <div className="col-lg-4 p-5 col-md-5 col-sm-9 p-3 service-card align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="300">
                        <img className="text-center" src={require(`../../assets/icons/erp (2).png`)} width="60px" alt=""/>
                        <h4 className="text-center">Enterprise software Development</h4>
                        <p className="service-para">
                        Streamlining operations, driving growth. Our enterprise software solutions optimize efficiency, boost
                        productivity, and empower your business for success.
                        </p>
                        <Link to="/enterprise-software-development">Read more <i className="bi bi-arrow-right"></i></Link>
                    </div>

                    <div className="col-lg-4 p-5 col-md-5 col-sm-9 p-3 service-card align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="400">
                        <img className="text-center" src={require(`../../assets/icons/shopping.png`)} width="60px" alt=""/>
                        <h4 className="text-center">E-Commerce Solutions</h4>
                        <p className="service-para">
                        From intuitive product catalogs to secure payment gateways, we create eCommerce solutions that showcase your
                        products, streamline transactions.
                        </p>
                        <Link to="/ecommerce-development">Read more <i className="bi bi-arrow-right"></i></Link>
                    </div>

                    <div className="col-lg-4 p-5 col-md-5 col-sm-9 p-3 service-card align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="500">
                        <img className="text-center" src={require(`../../assets/icons/ui.png`)} width="60px" alt=""/>
                        <h4 className="text-center">Ui/Ux Design</h4>
                        <p className="service-para">
                        Crafting intuitive designs that merge aesthetics with functionality. Our UI/UX solutions prioritize
                        user-centric experiences to create memorable interactions. 
                        </p>
                        <Link to="/uiux-design">Read more <i className="bi bi-arrow-right"></i></Link>
                    </div>

                    <div className="col-lg-4 p-5 col-md-5 col-sm-9 p-3 service-card align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="600">
                        <img className="text-center" src={require(`../../assets/icons/branding.png`)} width="60px" alt=""/>
                        <h4 className="text-center">Branding & Identity</h4>
                        <p className="service-para">
                        From logo design to brand guidelines, we develop cohesive visual identities that reflect your brand's values,
                        communicate your story, and build strong brand recognition.
                        </p>
                        <Link to="/branding-and-identity">Read more <i className="bi bi-arrow-right"></i></Link>
                    </div>
                </div>
                    
            </div>
        </section>
    );
}