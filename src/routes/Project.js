import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2  heading="PROJECTS" text=" There projects are the demonstration of my learning and experiments with modern technologies. Projects are the place where one can make their hands dirty and implement the practical use cases or scenerioes.I have completed vaieous based on development , front-end in technologies like , Back-end ,database, big data, cloud capebilities. I have used technologies like HTML, CSS, Javascript, c++, Object oriented programming, file handling, NewsAPI, Data structures and algorithms, MySQL , Bid data, Hadoop, Kafka, Python , Cloud computing , AWS ,S3 bucket, RDBMS etc.    Here are glimpse of my recent project works." url="https://res.cloudinary.com/practicaldev/image/fetch/s--V0ekZaVJ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/h68x0up43hmknl5tjcww.jpg"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project