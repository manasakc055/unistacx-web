

import React from "react";
import Hero from "../components/page-1/Hero";
import ScrollDown from "../components/page-1/ScrollDown";
import Carousel from "../components/page-1/Carousel";
import About from "../components/page-1/About";
import Services from "../components/page-1/Services";
import Process from "../components/page-1/Process";
import Startup from "../components/page-1/Startup";
import Contact from "../components/page-1/Contact";
import { motion } from "framer-motion/dist/framer-motion";
import AnimateData from "./AnimateData";
import { Helmet } from "react-helmet-async";
export default function Main(){

    return(<>
    <Helmet>
        <title>Home - UniStacx</title>
        <meta name="description" content="UniStacx crafts bespoke software solutions for your unique needs. Elevate your business with tailored development, innovation, and a partnership dedicated to your success."/>
        <link rel="canonical" href="/" />
        <link rel="icon" href={require(`../assets/svg/favicon.svg`)} />
    </Helmet>
        <motion.div 
            variants={AnimateData}
            initial="hidden"
            animate="show"
            exit="exit"
            transition="transition"
        >
            <Hero />
            <ScrollDown/>
            <Carousel/>
            <About/>
            <Services/>
            <Process/>
            <Startup/>
            <Contact/>
        </motion.div>
        </>
    )
}