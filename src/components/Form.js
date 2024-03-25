import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FormStyles.css';

const Form = () => {
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Submit the form data to the endpoint
    try {
      const response = await fetch("https://formspree.io/f/xjvnezob", {
        method: "POST",
        body: new FormData(event.target)
      });
      
      // Check if form submission was successful
      if (response.ok) {
        // Redirect to /home
        navigate('/home');
      } else {
        // Handle errors
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  // Dummy onClick function for the button
  const handleButtonClick = () => {
    alert("Form submitted!");
  };

  return (
    <div>
      <h1 className="form-heading">Contact Me</h1>
      <p className="form-p">
        If you have any questions, feel free to drop me a line. <br />
        If you don't get any answer immediately, I might just <br />
        be traveling through the middle of nowhere. <br />
        I'll get back to you as soon as possible as I can. <br />
        That's a promise!
      </p>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" required />
          <label>Email</label>
          <input type="email" name="_replyto" required />
          <label>Subject</label>
          <input type="text" name="subject" required />
          <label>Message</label>
          <textarea rows='6' name="message" placeholder="Type your message here" required />
          <button className="btn" type="submit" onClick={handleButtonClick}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;

