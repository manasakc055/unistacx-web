import React from "react";

export default function TechIcons(props){
    //console.log(props.delay)
    const {img,delay} = props;
    return(
        <div data-aos="fade-up" data-aos-delay = {delay} className="col-6 col-md-4 col-lg-2">
            <div class="p-3 h-100 border d-flex align-items-center justify-content-center rounded shadow">
                <img src={require(`../../assets/icons/technologies/${img}`)} alt="" className="tech-logo" style={{maxWidth:"100%"}} />
            </div>
          </div>
    );
}
/*
<div data-aos="fade-up" data-aos-delay = {delay} className="col-3 bg-dark d-flex align-items-center justify-content-center p-3 rounded shadow">
             
        </div>
*/