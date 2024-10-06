import React from "react";
import { Route,Routes, useLocation } from "react-router-dom";
import Main from './main';
import PageNotFound from "../components/PageNotFound";
import About from './about';
import Service from './Service';
import OurApproach from './ourprocess';
import ForStartups from './for-startups';
import Contact from "./Contact";
import { AnimatePresence } from "framer-motion/dist/framer-motion";

export default function AnimatedRoutes(){
  const location = useLocation();
  //console.log(location.pathname,'sxxxxxxxxxxxxx')
    return(
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Main />} />
          <Route path='/who-we-are' element={<About />} />
          <Route path='/web-application-development' element={<Service service={0}  path='/web-application-development'/>} />
          <Route path='/mobile-application-development' element={<Service service={1}  path='/mobile-application-development'/>} />
          <Route path='/enterprise-software-development' element={<Service service={2}  path='/enterprise-software-development'/>} />
          <Route path='/ecommerce-development' element={<Service service={3}  path='/ecommerce-development'/>} />
          <Route path='/uiux-design' element={<Service service={4}  path='/uiux-design'/>} />
          <Route path='/branding-and-identity' element={<Service service={5}  path='/branding-and-identity'/>} />
          <Route path='/our-approach' element={<OurApproach />} />
          <Route path='/for-startups' element={<ForStartups />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        </AnimatePresence>
    );
}