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
          My Name is Krishnendra Sharma. I had completed my graduation form Maulana Azad National Institute of Technology Bhopal in 2022. Am working as a Software Engineer Trainee in Incedo Technology Solutions Limited. Am exprienced in various domains  like front-end development, back-end development,full stack
          , databases, data engineering, big data, computer networks, load balancing etc. Am also certified Cloud Practitioner by Amazon Web Services.
          I have hands on working exprience with tech stacks like Data structures and algorithms, OOps, CN, C++, Java, Javascript,  Mysql, MongoDB, AWS, Linux etc.
          <br/>
          <br/>
          Wants to know more ??

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