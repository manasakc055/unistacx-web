import React from "react";
import Contact from "../page-1/Contact";
import ContactData from "./ContactData";

export default function Hero() {
return (
<div>
  <section className="contact-hero d-flex align-items-center justify-content-center">
    <div className="container contact-container d-flex align-items-center justify-content-center bg-light"
      data-aos="fade-up">
      <div className="row d-flex align-items-center justify-content-center contact-row">
        <div className="col-lg-4 col-sm-12 lhs-contact bg-white h-100 d-flex justify-content-right order-sm-1 order-2">
          <div>
            <ContactData icon="bi-telephone-inbound" header='Phone' sub_header="Mon-Fri from 8am to 5pm"
              data="+91 88853 18863" link="tel: +918885318863" />

            <ContactData icon="bi bi-envelope" header='Email' sub_header="Our friendly team is here to help!"
              data="hello@unistacx.com" link="mailto:hello@unistacx.com" />
            <ContactData icon="bi bi-whatsapp" header='Chat with us' sub_header='Send a "hi"' data="+91 88853 18863"
              link="https://wa.me/+918885318863" />
          </div>
        </div>
        <div className="col-lg-8 col-sm-12 rhs-contact order-sm-2 order-1">
          <Contact header="We'd love to hear from you" />
        </div>
      </div>
    </div>
  </section>
</div>
);
}