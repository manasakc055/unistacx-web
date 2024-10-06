import React from "react";
import Data from "./Data";
import Feature from "./Feature";
export default function Features(props){
    const {features_heading,features_description,features_list} = Data[props.service];
    let feature_components = features_list.map((item)=>(<Feature heading = {item.heading} key={item.heading} description = {item.description}/>))
    return(
        <section className="mt-5 mb-5 pt-5 pb-5  d-flex align-items-center justify-content-center bg-light">
        <div className="container">
            <h1 data-aos="fade-up">{features_heading}</h1>
            <p data-aos="fade-up">{features_description}</p>
            <div className="row d-flex align-items-center justify-content-center">
                {feature_components}
            </div>
        </div>
    </section>
    );
}