import React from 'react'
import "./FooterStyles.css"

import {FaFacebook, FaHome,FaInstagram,FaLinkedin,FaMailBulk,FaPhone, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} />
                    <div>
                        <p>Allitus Co Op Society</p>
                        <p> Vishal Nagar Pune , India</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} />+91-6377950599</h4>
                </div>

                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} />krishnendrasharma@gmail.com</h4>
                </div>

            </div>

            <div className='right'>
                <h4>About Us</h4>
                <p>Hello everyone. I am  Krishnendra Sharma. I am a software engineer. I work with Incedo Technology solutions ltd. as a Software Engineer. 
                This is my portfolio website to domnstrate my porjects, work exprience and skills. Hope you like it !  Stay tuned for more updates. See you Soon !</p>
                <div className='social'>
                    <a href='https://www.linkedin.com/in/krishnendra-sharma-022a85175/' target="__blank"><FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}} /></a>
                    <a href='https://www.facebook.com/krishnendra.sharma.3' target="__blank"><FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}  /></a>
                    <a href='https://twitter.com/KrishnendraSha1' target="__blank"><FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}} /></a>
                    <a href='https://www.instagram.com/amkrishnendra/?next=%2F' target="__blank"><FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}} /></a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer
