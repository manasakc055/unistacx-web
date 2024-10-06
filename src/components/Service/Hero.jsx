import React from "react";
import Data from './Data'
export default function Hero(props){
    const {heading,sub_heading,css_class} = Data[props.service];
    //console.log(Data)
    return(
        <section className={`service-hero p-2 ${css_class}`}>
        <div className="container service-container d-flex align-items-center justify-content-left">
            <div className="div w-100" >
                <h6 data-aos="fade-up" className="fs-6">SERVICES</h6>
                <hr data-aos="fade-up"  data-aos-delay="50"/>
                <h1 data-aos="fade-up"  data-aos-delay="100" className="about-h fs-2">{heading}</h1>
                <p data-aos="fade-up"  data-aos-delay="150" className="text-left">{sub_heading}</p>
            </div>
        </div>
    </section>
    );
}