import "./FormStyles.css";
import React from 'react'

const Form = () => {
  return (
    <div >
    <h1 className="form-heading">Contact Me</h1>
      <p className="form-p">If you have any questions, feel free to drop me a line.<br/> If you don't get any answer immediately, I might just <br/> be travelling
      throught middle of nowhere.<br/>I'll get back to you as soon as possible as I can.<br/> That's a promise!</p>
    
    <div className="form">
      
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows='6' placeholder="Type your message here"></textarea>
          <button className="btn">Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Form