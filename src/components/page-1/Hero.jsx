import React from "react";
import "../../assets/css/style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import openModal from "../openModal";
import ImageComponent from "../Image";
import hero_pattern from "../../assets/img/hero-pattern.png"
export default function Hero(props){
 
    return (
    <section className="hero d-flex align-items-center justify-content-center py-5 position-relative">
        <div className="div h-100 w-100 position-absolute hero-pat">
        </div>
        <div className="container z-2 main-container d-flex align-items-center justify-content-center">
            <div className="bg-dar row d-flex align-items-center justify-content-center" style={{minWidth:"100%"}}>
                <div className="col-lg-6 col-md-10 col-sm-12 d-flex align-items-center justify-content-center order-sm-1 order-md-1 order-2">
                    <div className="hero-header fw-bold">
                        <h1 className="Hero-h1 mb-3 fw-bolder">From idea to implementation,<br/> We bring your <span className="hero-h1-sub text-center mx-auto" style={{"color":"#651CC2","fontWeight":600}}>vision</span> to life.</h1>
                        <h5 className="mb-3 fw-medium fs-6">We Specialize in Tailored Software Solutions, Where Your Vision Meets Technology.</h5>
                        <button className="btn btn-cta me-2" onClick={openModal}><i className="bi bi-chat-dots-fill"></i> Get a quote</button>
                        <a href="#to-about" className="btn btn-cta-2" >Read more <i className="bi bi-arrow-right"></i></a>
                        
                    </div>
                </div>
                <div className="col-lg-6 col-md-10 col-sm-12 order-sm-1 order-md-2  d-flex align-items-center justify-content-center">
                    <ImageComponent class_name="hero-img" src={require(`../../assets/img/hero-1-2.webp`)} 
                    blur_hash="LIKUvPV@%zR*Ek-;xaWA~pD%4nof"
                    />
                </div>
                
            </div>
        </div>
    </section>
    )
}