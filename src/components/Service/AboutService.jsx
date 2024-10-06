import React from "react";
import Data from './Data'
import SubIcons from "./SubIcons";
import ImageComponent from "../Image";
export default function AboutService(props){
        //console.log("about service")
        const {about_description,about_heading,about_sub_icons,about_img,about_hash} = Data[props.service];
        //const [sub_icons,setSubIcons] = useState([]);
        if (about_sub_icons){
            var sub_icons = about_sub_icons.map(function(items){
                    return (
                        <SubIcons 
                        key = {items.img}
                        img = {items.img}
                        description={items.description}
                        />
                    )
                })
            //setSubIcons(sub_icons_list);
        }

    return (
        <section className="mt-5 mb-5">
        <div className="container d-flex align-items-center justify-content-center">
            <div className="row d-flex align-items-center justify-content-center">

                <div className="col-lg-6 col-sm-12">
                    <h1 data-aos = "fade-up">
                        {about_heading}
                    </h1>
                    <p data-aos = "fade-up">
                        {about_description}
                    </p>
                    {about_sub_icons && <div className="row d-flex align-items-center justify-content-center" data-aos = "fade-up">{sub_icons} </div>}
             
                </div>
                <div className="col-lg-6 col-sm-12 d-flex align-items-center justify-content-center" data-aos = "fade-up">
                    <ImageComponent
                    src={require(`../../assets/img/ui/${about_img}`)} 
                    style={{"maxWidth": "90%"}} 
                    blur_hash={about_hash}
                    />
                </div>
            </div>
        </div>
    </section>
    );
}