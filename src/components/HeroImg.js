import "./HeroImgStyles.css";

import React, { useState, useCallback, useEffect } from 'react'
import { Link } from "react-router-dom"

import IntroImg from "../assets/walpaper1.jpg"


const names = [
  "Software Engineer", "Data Engineer", "Node Developer", "Java Engineer","Network Engineer", "TAC Engineer"
]

const HeroImg = () => {
  const [newName, setnewName] = useState("");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 300);
    return () => clearInterval(intervalID);
  }, [shuffle])

  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="img" />
      </div>

      <div className="content">
        <br />  <br />  <br />  <br />
        <br />  <br />  <br />  <br />
        <p>Hi ,   I am    Krishnendra</p>
        <br />  <br />  <br />  <br />
        <p>Am a</p>
        <h1>{newName}</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn-light">Contact</Link>
        </div>
      </div>

    </div>
  )
}

export default HeroImg
