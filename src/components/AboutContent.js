import  "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

import React1 from "../assets/krish3.jpg";


const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1> Who Am I ?</h1>
        <p>HOLA AMIGOS !
         My name is Krishnendra Sharma. I graduated from Maulana Azad National Institute of Technology Bhopal in 2022 and currently work as a Software Engineer at Incedo Technology Solutions Limited. I have experience in various domains, including front-end development, back-end development, full-stack development, databases, data engineering, big data, computer networks, and load balancing. I am a certified Cloud Practitioner by Amazon Web Services and an ACOS 4 Architect by A10 Networks. My hands-on experience encompasses a wide range of technologies such as data structures and algorithms, object-oriented programming (OOP), Java, Spring Boot, C++, JavaScript, MySQL, MongoDB, AWS, Linux, and load balancing. 
          <br/>
          <br/>
          Wants to know more ??
           <br/>
           Explore my portfolio and let's connect to create something amazing!
           <br/>
        </p>
        <Link to="/contact">
          <button  className="btn" > Contact Me</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
          </div>

       
        </div>

      </div>

    </div>
  )
}

export default AboutContent
