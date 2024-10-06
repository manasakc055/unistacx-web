import React from "react";
import ImageComponent from "../Image";

export default function About() {
  return (
    <section className="pt-5 pb-5 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-6 col-sm-12">
            <ImageComponent
             src={require(`../../assets/img/about2_approach.png`)}
             blur_hash="LOQvqI-7~nS^s;ofXSbc_1SiI]t8"/>
          </div>
          <div className="col-lg-6 col-sm-12">
            <h1 data-aos="fade-up">Accelerate Delivery and Collaboration with DevOps</h1>
            <h5 data-aos="fade-up">Efficient and Agile Development Lifecycle</h5>
            <p data-aos="fade-up">
              At Unistacx, we prioritize the implementation of Continuous
              Integration and Delivery (CI/CD) practices to streamline the
              software development and delivery lifecycle. Our approach revolves
              around automating key processes, ensuring faster and more reliable
              software releases. With CI/CD, we establish a seamless integration
              pipeline, enabling developers to merge code changes frequently and
              automatically trigger build, test, and deployment processes. This
              approach allows for rapid feedback and early detection of issues,
              leading to faster issue resolution and increased productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
