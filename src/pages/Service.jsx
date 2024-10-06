import React, { useEffect, useState } from "react";
import Hero from "../components/Service/Hero";
import SubHero from "../components/Service/SubHero";
import AboutService from "../components/Service/AboutService";
import Technologies from "../components/Service/Technologies";
import CTA from "../components/Service/CTA";
import Features from "../components/Service/Features";
import { motion } from "framer-motion/dist/framer-motion";
import AnimateData from "./AnimateData";
import { Helmet } from "react-helmet-async";
//
export default function Service(props){
    //console.log(props)
    const [meta,setMeta] = useState({
        title:"UniStacx",
        description:""
    });
    useEffect(()=>{
        if (props.service === 0){
            setMeta({
                title:"Web Application Development - UniStacx",
                description:"At UniStacx, we specialize in web application development services that empower businesses to thrive in the digital landscape."
            })
        }else if (props.service === 1){
            setMeta({
                title:"Mobile Application Development - UniStacx",
                description:"In the ever-evolving digital landscape, mobile applications have become essential tools for businesses to reach and engage their customers."
            })
        }else if (props.service === 2){
            setMeta({
                title:"Enterprise Software Development - UniStacx",
                description:"At Unistacx, we specialize in delivering comprehensive enterprise software solutions that empower businesses to thrive in the digital age."
            })
        }else if (props.service === 3){
            setMeta({
                title:"E-Commerce Development - UniStacx",
                description:"In the rapidly evolving world of e-commerce, it's crucial to have a solution that caters to the unique requirements of your business."
            })
        }else if (props.service === 4){
            setMeta({
                title:"UI/UX Design - UniStacx",
                description:"In today's digital landscape, user experience (UX) and user interface (UI) design play a vital role in capturing and retaining user attention."
            })
        }else if (props.service === 5){
            setMeta({
                title:"Branding & Identity - UniStacx",
                description:"At Unistacx, we understand that your brand is more than just a logo or a tagline. It is the essence of your business, the story you tell, and the emotions you evoke."
            })
        }
    },[props])
    return(<>
    <Helmet>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description}/>
            <link rel="canonical" href={props.path} />
            <link rel="icon" href={require(`../assets/svg/favicon.svg`)} />
        </Helmet>
        <motion.div 
        variants={AnimateData}
        initial="hidden"
        animate="show"
        exit="exit"
        transition="transition"
        >
            <Hero service = {props.service}/>
            <SubHero service = {props.service}/>
            {props.service === 2 && <Features service = {props.service} />}
            <AboutService service = {props.service}/>
            {props.service !==5 && <Technologies service = {props.service}/>}
            <CTA service={props.service} />
        </motion.div>
        </>
    );
}