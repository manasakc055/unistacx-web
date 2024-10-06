import React from "react";
import { Link } from "react-router-dom";
export default function CTA() {
  return (
    <section className=" p-5 mt-5 cta-section cta-section-process" data-aos="fade-up">
      <div className="container">
        <h1 data-aos="fade-up">Unlock Your Software's Full Potential</h1>
        <p data-aos="fade-up">Experience seamless development, enhanced productivity, and accelerated growth with our transformative approach. Contact us now to get started!</p>
        <Link data-aos="fade-up" to="/contact" className="btn cta-btn-2">
          Let's talk
        </Link>
      </div>
    </section>
  );
}
