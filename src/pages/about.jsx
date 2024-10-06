import React from "react";
import Hero from "../components/about-components/hero";
import SubHero from "../components/about-components/SubHero";
import Commitment from "../components/about-components/Commitment";
import Values from "../components/about-components/Values";
import Partner from "../components/about-components/Partner";
import CTA from "../components/about-components/CTA";
import { motion } from "framer-motion/dist/framer-motion";
import AnimateData from "./AnimateData";
import { Helmet } from "react-helmet-async";
export default function About(){

    return(<>
        <Helmet>
            <title>Who We Are - UniStacx</title>
            <meta name="description" content="UniStacx's official website."/>
            <link rel="canonical" href="/who-we-are" />
            <link rel="icon" href={require(`../assets/svg/favicon.svg`)} />
        </Helmet>
        <motion.div 
        variants={AnimateData}
        initial="hidden"
        animate="show"
        exit="exit"
        transition="transition"
        >
            <Hero/>
            <SubHero />
            <Commitment />
            <Values />
            <Partner />
            <CTA />
        </motion.div>
        </>
    );
}