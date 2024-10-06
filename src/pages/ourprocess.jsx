import React from "react";
import Hero from "../components/ourprocess/hero";
import SubHero from "../components/ourprocess/SubHero";
import About from "../components/ourprocess/About";
import About2 from "../components/ourprocess/about-2";
import Features from "../components/ourprocess/Features";
import CTA from "../components/ourprocess/CTA";
import { motion } from "framer-motion/dist/framer-motion";
import AnimateData from "./AnimateData";
import { Helmet } from "react-helmet-async";

export  default function OurApproach(){
    return(<>
     <Helmet>
            <title>Our Approach - UniStacx</title>
            <meta name="description" content="UniStacx's official website."/>
            <link rel="canonical" href="/contact" />
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
            <SubHero />
            <About />
            <Features />
            <About2 />
            <CTA />
        </motion.div>
        </>
    );
}