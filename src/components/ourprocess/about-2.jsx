import React from "react";
import ImageComponent from "../Image";

export default function About2() {
  return (
    <section className="pt-5 pb-5 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          
          <div className="col-lg-6 col-sm-12">
            <h1 data-aos="fade-up">Automated Testing and Quality Assurance</h1>
            <h5 data-aos="fade-up"> Ensuring Reliable and High-Quality Software</h5>
            <p data-aos="fade-up">
              At Unistacx, we prioritize the implementation of robust automated
              testing and quality assurance processes throughout the software
              development lifecycle. Our dedicated team of QA experts utilizes
              cutting-edge tools and methodologies to thoroughly test your
              applications, identify potential issues, and ensure the delivery
              of reliable and high-quality software. By automating repetitive
              testing tasks and performing comprehensive quality checks, we
              minimize the risk of bugs, improve software performance, and
              enhance the overall user experience. With our commitment to
              quality assurance, you can trust that your software will meet the
              highest standards of functionality, security, and reliability.
            </p>
          </div>
          <div  data-aos="fade-up"className="col-lg-6 col-sm-12">
            <ImageComponent
             src={require(`../../assets/img/about2_approach.jpg`)} 
             blur_hash="LORMVlIU%MVs~q%MRjkCX-Rjbbbv"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
