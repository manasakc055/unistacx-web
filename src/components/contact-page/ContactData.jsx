import React from "react";

export default function ContactData(props){
    const {icon,header,sub_header,data,link} = props;
    return(
        <div className="contact-div container pt-3 mb-3 d-flex" data-aos="fade-up">
                <div className="c-icon  d-flex align-items-center justify-content-center me-3"  >
                  <a  href={link} target="_blank" rel="noopener noreferrer"><i
                    style={{ fontSize: "20px" }}
                    className={`bi ${icon}`}
                  ></i></a>
                </div>
                <div className="contact-data">
                  <h5>{header}</h5>
                  <p className="mb-2">{sub_header}</p>
                  <p style={{fontWeight:"600"}}>{data}</p>
                </div>
        </div>
    );
}