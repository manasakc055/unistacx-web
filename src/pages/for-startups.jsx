import React from "react";
import Hero from "../components/for-startups/Hero";
import About from "../components/for-startups/about";
import About2 from "../components/for-startups/about2";
import About3 from "../components/for-startups/about3";
import CTA from "../components/for-startups/CTA";
import AnimateData from "./AnimateData";
import { motion } from "framer-motion/dist/framer-motion";
import { Helmet } from "react-helmet-async";
export default function ForStartups(){

    return(<>
    <Helmet>
            <title>For StartUps - UniStacx</title>
            <meta name="description" content="UniStacx's official website."/>
            <link rel="canonical" href="/contact" />
            <link rel="icon" href={require(`../assets/svg/favicon.svg`)} />
        </Helmet>
        <motion.div
        variants={AnimateData}
        initial="hidden"
        animate="show"
        exit="exit"
        >
            <Hero />
            <About />
            <About2 />
            <About3 />
            <CTA />
        </motion.div>
        </>
    );
}