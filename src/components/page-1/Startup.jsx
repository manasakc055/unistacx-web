import React from "react";
import { Link } from "react-router-dom";

export default function Startup() {
  return (
    <section className="d-flex align-items-center bg-light  mt-5 pt-5 pb-5 non-hero-section">
      <div className="container">
        <h2 data-aos="fade-up" className="mb-3">
          Unleashing Startup Potential in the Digital Landscape
        </h2>
        <p data-aos="fade-up">
          At UniStacx, we are committed to empowering startups and fueling their
          growth. We offer a comprehensive Startup Support Program designed to
          provide startups with the necessary tools, guidance, and services to
          turn their ideas into successful ventures.
        </p>
        <div className="row d-flex align-items-center justify-content-center">
          <div
            className="col-lg-5 col-sm-10 m-2 p-3 startup-card"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src={require(`../../assets/gifs/idea.gif`)}
              className="gif"
              alt=""
            />
            <h3>Consultation & Idea Validation</h3>
            <p>
              We offer personalized consultations to understand your startup's
              unique challenges and goals. Our experts provide valuable insights
              and help validate your ideas, ensuring a strong foundation for
              success.
            </p>
            <Link to="for-startups">
              Read more <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div
            className="col-lg-5 col-sm-10 m-2 p-3 startup-card"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <img
              src={require(`../../assets/gifs//php.gif`)}
              className="gif"
              alt=""
            />
            <h3>Tailored Solutions</h3>
            <p>
              We provide customized solutions that address the specific needs of
              startups. Whether it's web and mobile app development, UI/UX
              design, branding, or business automation, our services are
              designed to accelerate your startup's progress.
            </p>
            <Link to="for-startups">
              Read more <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div
            className="col-lg-5 col-sm-10 m-2 p-3 startup-card"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src={require(`../../assets/gifs/ladder.gif`)}
              className="gif"
              alt=""
            />
            <h3>Cost-Effective Packagesn</h3>
            <p>
              We offer affordable and flexible packages tailored for startups,
              enabling you to access top- notch services within your budget. Our
              goal is to provide exceptional value without compromising on
              quality.
            </p>
            <Link to="for-startups">
              Read more <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div
            className="col-lg-5 col-sm-10 m-2 p-3 startup-card"
            data-aos="fade-up"
            data-aos-delay="550"
          >
            <img
              src={require(`../../assets/gifs/job-interview.gif`)}
              className="gif"
              alt=""
            />
            <h3>Mentorship & Guidance</h3>
            <p>
              Our experienced team is here to guide you through every step of
              your startup journey. We offer mentorship and share industry best
              practices to help you navigate challenges and make informed
              decisions.
            </p>
            <Link to="for-startups">
              Read more <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
