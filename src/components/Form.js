// Form.js
import "./FormStyles.css";
import React from 'react'
import { useNavigate } from "react-router-dom";

const Form = () => {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }
 

  return (
    <div >
      <h1 className="form-heading">Contact Me</h1>
      <p className="form-p">If you have any questions, feel free to drop me a line.<br/> If you don't get any answer immediately, I might just <br/> be travelling
      through the middle of nowhere.<br/>I'll get back to you as soon as possible as I can.<br/> That's a promise!</p>
    
      <div className="form">
        <form action="https://formspree.io/f/xjvnezob" method="POST">
          <label>Your Name</label>
          <input type="text" name="name"></input>
          <label>Email</label>
          <input type="email" name="_replyto"></input>
          <label>Subject</label>
          <input type="text" name="subject"></input>
          <label>Message</label>
          <textarea rows='6' name="message" placeholder="Type your message here"></textarea>
          <button className="btn" type="submit" onSubmit={routeChange}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form

