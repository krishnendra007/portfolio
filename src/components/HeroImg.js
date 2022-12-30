import "./HeroImgStyles.css";

import React from 'react'
import {Link} from "react-router-dom"

import IntroImg from "../assets/walpaper1.jpg"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="img"/>
        </div>

        <div className="content">
        <br/>  <br/>  <br/>  <br/>
        <br/>  <br/>  <br/>  <br/>
            <p>Hi ,   I am    Krishnendraaaaaaaaaaaaa</p>
            <br/>  <br/>  <br/>  <br/>
            <p>Am a</p>
            <h1>Software Engineer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>

    </div>
  )
}

export default HeroImg
