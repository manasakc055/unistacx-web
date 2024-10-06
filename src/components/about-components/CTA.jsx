import React from "react";
import { Link } from "react-router-dom";

export default function CTA(){
    return(
        <section className="bg-dark text-white" data-aos="fade-up">
        <div className="container p-5 d-flex align-items-center cta-container">
        <div>
          <h1 data-aos="fade-up">Ready to Take Your Business to New Heights?</h1>
          <p data-aos="fade-up" style={{color:"white"}}>Let's Start Your Digital Transformation Journey Today!</p>
          <Link data-aos="fade-up" to="/contact" className="btn cta-button">Get in Touch</Link>
        </div>
</div>
      </section>
    );
}