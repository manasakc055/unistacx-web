import React, { useRef } from "react";

export default function Carousel() {
  const btn = useRef(null);
  const myTimeout = setTimeout(swipe, 3000);

  function swipe() {
    if (btn.current) {
      btn.current.click();
    }
  }
  return (
    <div
      className="sub-hero mt-3 pb-5 position-relative carousel-section"
      data-aos="fade-up"
      data-aos-offset="50"
    >
      <div className="container  d-flex align-items-center justify-content-center">
        <div
          id="sub-carousel"
          className="carousel slide sub-carousel carousel-dark slide rounded-4"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#sub-carousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#sub-carousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#sub-carousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="top-bar-mockup top-bar-f d-flex align-items-center z-1 p-3 position-relative">
            <div className="action-ico red rounded-circle bg-danger m-1"></div>
            <div className="action-ico yellow rounded-circle bg-warning m-1"></div>
            <div className="action-ico green rounded-circle bg-success m-1"></div>
          </div>


          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img
                src={require(`../../assets/img/ui/ui-2.webp`)}
                className="d-block w-100"
                alt="..."
                style={{ maxWidth: "100%" }}
              />
            </div>

            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={require(`../../assets/img/ui/ui-1.webp`)}
                className="d-block w-100"
                alt="..."
                style={{ maxWidth: "100%" }}
              />
            </div>

            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={require(`../../assets/img/ui/ui-3.webp`)}
                className="d-block w-100"
                alt="..."
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#sub-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            ref={btn}
            className="carousel-control-next"
            type="button"
            data-bs-target="#sub-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div id="to-about"></div>
    </div>
  );
}
