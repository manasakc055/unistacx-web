import React from "react";
import { Link } from "react-router-dom";
import ImageComponent from "../Image";

export default function Process() {
  return (
    <section className="d-flex align-items-center  mt-5 pt-5 pb-5 non-hero-section">
      <div className="container align-items-center justify-content-center about-3 mt-3 mb-3">
        <div className="row align-items-center vertical-align-middle flex-colums-reverse ">
          <div className="col-lg-6 order-2 order-md-1 align-items-center vertical-align-middle justify-content-center about-3-txt">
            <div>
              <h2 className="mb-4" data-aos="fade-up">
                Driving Digital Transformation: Our Strategic Roadmap to Success
              </h2>
              <p className="mb-4 fs-6 text-left" data-aos="fade-up">
                At Unistacx, we follow a meticulous and strategic approach to
                deliver outstanding digital solutions. We begin by thoroughly
                understanding your objectives and target audience, allowing us
                to create a tailored strategy. Our talented team collaborates
                closely, utilizing cutting-edge technologies and best practices
                to ensure a seamless and successful project from concept to
                launch.
              </p>
              <div className="container text-center">
                <div className="row mb-4">
                  <div
                    className="col-lg-5 p-3 col-sm-12 d-flex align-items-center process-card justify-content-around"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    style={{ maxWidth: "90%" }}
                  >
                    <img
                      src={require(`../../assets/icons/marketing.png`)}
                      className="icon"
                      alt=""
                    />
                    <div className="text-center fs-6">
                      Strategic Approach, Exceptional Results
                    </div>
                  </div>

                  <div
                    className="col-lg-5 p-3 col-sm-12 d-flex align-items-center process-card justify-content-around"
                    data-aos="fade-up"
                    data-aos-delay="250"
                    style={{ maxWidth: "90%" }}
                  >
                    <img
                      src={require(`../../assets/icons/conversation.png`)}
                      className="icon"
                      alt=""
                    />
                    <div className="text-center fs-6">Transparent Communication</div>
                  </div>

                  <div
                    className="col-lg-5 p-3 col-sm-12 d-flex align-items-center process-card justify-content-around"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    style={{ maxWidth: "90%" }}
                  >
                    <img
                      src={require(`../../assets/icons/deal.png`)}
                      className="icon"
                      alt=""
                    />
                    <div className="text-center fs-6">Collaborative Expertise</div>
                  </div>

                  <div
                    className="col-lg-5 p-3 col-sm-12 d-flex align-items-center process-card justify-content-around"
                    data-aos="fade-up"
                    data-aos-delay="550"
                    style={{ maxWidth: "90%" }}
                  >
                    <img
                      src={require(`../../assets/icons/execute.png`)}
                      className="icon"
                      alt=""
                    />
                    <div className="text-center fs-6">Seamless Execution</div>
                  </div>
                </div>
              </div>
              <Link
                to="/our-approach"
                data-aos="fade-up"
                data-aos-delay="570"
                className="btn btn-cta"
              >
                Read More
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="col-lg-6 order-1 order-md-2 col-sm-122 about-3-img d-flex align-items-center justify-content-center"
          >
            <ImageComponent
              src={require(`../../assets/img/process-img.webp`)}
              blur_hash="LPJ8nrnl?vxbI[tRM{NG~qRPDijb"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
