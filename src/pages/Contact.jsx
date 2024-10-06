import React from "react";
import Hero from "../components/contact-page/Hero";
import { motion } from "framer-motion/dist/framer-motion";
import AnimateData from "./AnimateData";
import { Helmet } from "react-helmet-async";
export default function Contact(){
    return(<>
    <Helmet>
            <title>Contact - UniStacx</title>
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
        </motion.div>
        </>
    );
}