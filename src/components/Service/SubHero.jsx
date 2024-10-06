import React from "react";
import Data from "./Data";
import SubIcons from "./SubIcons";
import ImageComponent from "../Image";
export default function SubHero(props) {
  //console.log("subhero");
  const {
    hero_heading,
    hero_description,
    hero_img,
    hero_sub_heading,
    hero_sub_icons,
    hero_hash
  } = Data[props.service];
  if (hero_sub_icons){
    var sub_icons = hero_sub_icons.map(function(items){
            return (
                <SubIcons 
                key = {items.description}
                img = {items.img}
                description={items.description}
                />
            )
        })
      //console.log(sub_icons)
    //setSubIcons(sub_icons_list);
}
  return (
    <section className="mt-5 mb-5">
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-6 col-sm-12 d-flex align-items-center justify-content-center mb-3" data-aos = "fade-up">
            <ImageComponent 
            src={require(`../../assets/img/ui/${hero_img}`)} 
            class_name={`${hero_img === 'esd_hero_2.jpg' && "service-hero-img"} hero-img`}
            blur_hash={hero_hash}/>
          </div>
          <div className="col-lg-6 col-sm-12">
            <h1 data-aos = "fade-up">{hero_heading}</h1>
            <h5 data-aos = "fade-up">{hero_sub_heading}</h5>
            <p data-aos = "fade-up">{hero_description}</p>
            {hero_sub_icons && <div className="row d-flex align-items-center justify-content-center" data-aos = "fade-up">{sub_icons}</div>}
            <a data-aos = "fade-up" data-aos-offset="50" href="/contact" className="btn btn-cta">
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
