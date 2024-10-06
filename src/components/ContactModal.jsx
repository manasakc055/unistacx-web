import React, { useRef } from "react";
import Contact from "./page-1/Contact";
import { motion } from "framer-motion/dist/framer-motion";
export default function ContactModal(){
    const mRef = useRef();
    function modalClose(){
      var modal = document.getElementById("contact-modal");
      modal.close()
      //console.log(mRef)
    }
    function close2(e){
        const modal = document.getElementById("contact-modal");
        const dialogDimensions = modal.getBoundingClientRect()
        if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clienty < dialogDimensions.top ||
        e.clienty > dialogDimensions.bottom){
        modal.close()
        }
    }
    return(
        <motion.div
        animate={{ x: 100 }}
  transition={{ delay: 1 }}>
        <dialog onClick={close2} ref={mRef} data-modal className="contact-modal" id="contact-modal">
            <button onClick={modalClose} className="modal-close"><h2><i className="bi bi-x-lg"></i></h2></button>
            <Contact />
            
        </dialog>
        </motion.div>
    )
}