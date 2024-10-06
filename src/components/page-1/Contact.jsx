import React, {  useState } from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PulseLoader } from "react-spinners";
export default function Contact(props){
    
    const {header} = props;
    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        phone : "",
        email : "",
        service : "",
        message: ""
    });
    //console.log(formData)
    function handleFormChange(event){
        setFormData((prev)=>{
            return {
                ...prev,
                [event.target.name] : event.target.value
            }
        })
    }
    const [checkState,setCheckState] = useState(false);
    function handleButton(event){
        setCheckState((prev)=>{ return !prev})
    }

    const [showLoader,setShowLoader] = useState(false);

    function handleSubmit(event){
        event.preventDefault();
        //console.log(formData)
        setShowLoader(true)
        var scriptUrl = 'https://script.google.com/macros/s/AKfycbyNJt5EEWJHF4D2nhTjT5mgj1665wpRfaGWBdPf6EWkFObJZYQqrFyibgZ-rJrcyCEWgA/exec'
        fetch(scriptUrl,
        {
            method:'POST',
            mode:'no-cors',
            headers :{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            setShowLoader(false)
            setFormData({
                firstName : "",
                lastName : "",
                phone : "",
                email : "",
                service : "",
                message: ""
            });
            toast.success("Request submitted successfully.");
          })
          .catch(error => {
            console.error('Error submitting form:', error);
            toast.error("something went wrong!!!");
          });
    }

    return(
        <section className="d-flex align-items-center justify-content-center mt-5 pt-5 pb-5 non-hero-section">
            <div className="container">
                <h2 data-aos="fade-up">{header ? header : `Request for a service`}</h2>
                <p data-aos="fade-up">Let's Connect and Bring Your Ideas to Life</p>
                <div className="container align-items-center justify-content-center">
                <form  onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12" data-aos="fade-up">
                            <div className="form-floating mb-3">
                                <input 
                                    type="text"
                                    name="firstName"
                                    className="form-control"
                                    id="name" 
                                    placeholder="First Name" 
                                    value={formData.firstName}
                                    onChange={handleFormChange}
                                    required 
                                />
                                <label htmlFor="name">First Name<span className="text-danger">*</span></label>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12" data-aos="fade-up">
                            <div className="form-floating mb-3">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="lastName" 
                                    placeholder="Last Name" 
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleFormChange}
                                    required 
                                />
                                <label htmlFor="name">Last Name<span className="text-danger">*</span></label>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12" data-aos="fade-up">
                            <div className="form-floating mb-3">
                                <input 
                                    type="phone" 
                                    className="form-control" 
                                    id="phone" 
                                    placeholder="Phone Number" 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleFormChange}
                                    required 
                                />
                                <label htmlFor="phone">Phone Number<span className="text-danger">*</span></label>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12" data-aos="fade-up">
                            <div className="form-floating mb-3">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    placeholder="Email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    required 
                                />
                                <label htmlFor="email">Email Address<span className="text-danger">*</span></label>
                            </div>
                        </div>
                        <div className="col-lg-12 col-sm-12" data-aos="fade-up">
                            <div className="form-floating mb-3">
                                <select className="form-select" id="service" value={formData.service} name="service" onChange={handleFormChange} aria-label="Floating label select example">
                                    <option >Click here</option>
                                    <option value="Web Application Development">Web Application Development</option>
                                    <option value="Mobile Application Development">Mobile Application Development</option>
                                    <option value="E-Commerce Development">E-Commerce Development</option>
                                    <option value="Enterprise Software Development">Enterprise Software Development</option>
                                    <option value="Ui/Ux Design">Ui/Ux Design</option>
                                    <option value="Branding & Identity">Branding & Identity</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Others">Others</option>
                                </select>
                                <label htmlFor="service">Service</label>
                            </div>
                        </div>
                        <div className="col-lg-12 col-sm-12" data-aos="fade-up">
                            <div className="form-floating mb-3">
                                <textarea 
                                    className="form-control" 
                                    placeholder="Leave a comment here" 
                                    id="message" 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleFormChange}
                                    required
                                    style={{minHeight:'30px',height:'auto'}}
                                ></textarea>
                                <label htmlFor="message">How can we help you?<span className="text-danger">**</span></label>
                            </div>
                        </div>
                    </div>
                    <div className="form-check mb-3" data-aos="fade-up">
                        <input className="form-check-input" type="checkbox" name="check" onChange={handleButton}  id="checkBox" required />
                        <label className="form-check-label" htmlFor="checkBox">
                        By providing my contact information, I agree to receive communication from <strong>UniStacx</strong> regarding my inquiry or
                        request.<span className="text-danger">*</span>
                        </label>
                    </div>
                    <button  data-aos="fade-up" className="btn btn-cta mt-2" type="submit" style={{minWidth:"150px"}} disabled={!checkState}>
                        <div id="loader" style={{display:showLoader?"":"none"}}><PulseLoader color="#20c24e" /></div>
                        <div id="text" style={{display:showLoader?"none":""}}>Submit</div>
                        </button>
                </form>
                </div>
            </div>
        </section>
    );
}