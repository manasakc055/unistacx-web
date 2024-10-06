import React from "react";
export default function ScrollTop(){

    function changeColor(){
        if (window.scrollY >= 150){
          //console.log("greater than 100")
          document.getElementById("to-top").style.visibility = "";
        }else{
          //console.log("less than 100 ")
            document.getElementById("to-top").style.visibility = "hidden";
        }
    }
    window.addEventListener("scroll",changeColor);
    function GoToTop(){
      //console.log(document.getElementById("to-top"))
        window.scrollTo({top:0,behavior:"smooth"});
    }
    return(
        
          <div id="to-top" onClick={GoToTop} style={{visibility:"hidden"}} className="to-top d-flex align-items-center justify-content-center pt-2">
            <h2>
              <i className="bi bi-arrow-up"></i>
            </h2>
          </div>
      
    );
}