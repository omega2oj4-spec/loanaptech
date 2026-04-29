import React from "react";
import "./Contact.css";
 
function Contact() {
    return (
        <div className="contact-page">
            <div className="contact-container">
            <h1>Contact Us</h1>
            <p> We're here to help!reach out anytime.</p>
            <div className="contact-info">
                <div className="contact-info-item">
                    <h3>Email:support@loanaptch.com</h3>
                    <h3>Phone:+1(555) 123-4567</h3>
                    <h3>Hours: Mon-Fri 9AM-5PM</h3>
                </div>
                <div className="contact-form">
                   
                    <form>
                        <input type="text" placeholder="Your Name" required /><br /><br />
                        <input type="email" placeholder="Your Email" required /><br /><br />
                        <textarea placeholder="Your Message" required></textarea><br /><br />
                        <button type="submit">Submit</button>
                    </form>

                    
                </div>
               
            </div>
            </div>
        </div>
    );
}
export default Contact;