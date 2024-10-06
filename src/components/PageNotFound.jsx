import React from "react";
import { Link } from "react-router-dom";
export default function PageNotFound(){
    return(
        <section className="bg-light p-3 d-flex align-items-center justify-content-center" style={{width:"100vw",height:"100vh"}}>
                <img className="me-2" src={require(`../assets/icons/warning.png`)} alt="" style={{maxWidth:"100px"}}/>
                <div>
                <h1>Oops! Page Not Found</h1>
                <p>We're sorry, but it seems like the page you're looking for has gone on a little adventure of its own and couldn't be found. </p>
                <Link to="/">Go back to Home Page</Link>
                </div>
        </section>
    );
}