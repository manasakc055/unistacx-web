import React from "react";

export default function SubIcons(props){
    const {img,description} = props;
    return(
        <div className="col-lg-6 d-flex align-items-center about-service-icon col-sm-9 mb-3">
            <img src={require(`../../assets/icons/${img}`)} alt=""  /> &nbsp;&nbsp;{description}
        </div>
    )
}