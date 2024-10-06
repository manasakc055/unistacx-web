import React from "react";

export default function Commitment() {
  return (
    <section className="pt-5 pb-5 d-flex align-items-center justify-content-center bg-light text-dark text-light">
      <div className="container">
        <h1 className="mb-3" data-aos="fade-up">
          Our Commitment to Your Success
        </h1>
        <h5 className="mb-3" data-aos="fade-up">
          Empowering Your Business Growth with Tailored Technology Solutions.
        </h5>
        <p data-aos="fade-up" className="text-start fw-normal">
          At UniStacx we believe that every business has unique goals and
          challenges. That's why we take a personalized approach to understand
          your specific needs and tailor our solutions accordingly. Whether
          you're looking for web development, mobile app development, enterprise
          software solutions, or branding and design services, we have the
          expertise and creativity to bring your vision to life.
        </p>
        <div class="container text-center my-3">
          <div className="row g-3">
            <div
              className="col col-md-3"
              
              data-aos="zoom-in-up"
              data-aos-delay="100"
            >
              <div className="p-3 border bg-light h-100 shadow-lg rounded-3 d-flex align-items-center justify-content-evenly">
              <img
                className=""
                src={require(`../../assets/icons/equalizer.png`)}
                alt=""
              />{" "}
              <p className="text-center">Customized Solutions</p>
              </div>
            </div>
            <div
              className="col col-md-3"
              
              data-aos="zoom-in-up"
              data-aos-delay="200"
            >
              <div className="p-3 border bg-light h-100 shadow-lg rounded-3 d-flex align-items-center justify-content-evenly">
              <img
                className=""
                src={require(`../../assets/icons/chat.png`)}
                alt=""
              />{" "}
              <p className="text-center">Proactive communication</p>
              </div>
            </div>
            <div
              className="col col-md-3"
              
              data-aos="zoom-in-up"
              data-aos-delay="300"
            >
              <div className="p-3 border bg-light h-100 shadow-lg rounded-3 d-flex align-items-center justify-content-evenly">
              <img
                className=""
                src={require(`../../assets/icons/approach (1).png`)}
                alt=""
              />{" "}
              <p className="text-center">Results-Driven Approach</p>
              </div>
            </div>
            <div
              className="col col-md-3"
              
              data-aos="zoom-in-up"
              data-aos-delay="400"
            >
              <div className="p-3 border bg-light h-100 shadow-lg rounded-3 d-flex align-items-center justify-content-evenly">
                <img
                  className=""
                  src={require(`../../assets/icons/deal (2).png`)}
                  alt=""
                />{" "}
                <p className="text-center">Ongoing support & collaboration</p>
              </div>
            </div>
          </div>
        </div>
        <p data-aos="fade-up" className="text-start fw-normal">
          Your success is our top priority. We are passionate about helping
          businesses thrive in the digital landscape and are committed to going
          above and beyond to deliver exceptional results. With our customized
          solutions, proactive communication, results-driven approach, and
          ongoing support, we are here to empower your business to reach new
          heights. Partner with us and experience the difference of a dedicated
          team that is fully invested in your success. Together, let's unlock
          the full potential of your digital journey.
        </p>
      </div>
    </section>
  );
}
