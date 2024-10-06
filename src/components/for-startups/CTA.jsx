import React from "react";
import { Link } from "react-router-dom";
export default function CTA() {
  return (
    <section className=" p-5 cta-section startups-cta" data-aos="fade-up">
      <div className="container">
        <h1 data-aos="fade-up">Ready to Take Your Startup to the Next Level?</h1>
        <p data-aos="fade-up">Let's Start Building Your Success Story</p> 
        <Link data-aos="fade-up" to="/contact" className="btn cta-btn-2">
          Let's talk
        </Link>
      </div>
    </section>
  );
}