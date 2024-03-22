import "./PricingCardStyles.css"
import React from 'react'


const PricingCard = () => {
  return (
    <div className="pricing">
      <h1 className="exprience-heading">Professional Expriences</h1>
      <div className="card-container">
        <div className="card">
          <h3> Incedo Technology Solutions</h3>
          <span className="bar">

          </span>
          <p className="btc">Software Engineer </p>
          <p>July 2022-Present</p>

          <p>  <h3>Tech stacks</h3> Advanced core operating system, load balancing, Linux, Virtual Machine, Java, HTML, CSS, JavaScript.
          </p>
          <p>Collaborated closely with the engineering, reliability, and TAC teams at A10 Networks to deliver sophisticated networking and cybersecurity
            solutions to a diverse clientele of business-to-consumer customers.
          </p>
          <p>
            Engaged with the TAC-tools team in the development of data filtering and analysis applications.
          </p>
          <p>Assisted clients in the deployment, maintenance, and optimization of load balancing and traffic management solutions within their networks.</p>
        </div>

        <div className="card">
          <h3> Incedo Technology Solutions</h3>
          <span className="bar">
          </span>
          <p className="btc">Software Engineer intern</p>
          <p>Jan 2022-July 2022</p>
          <p><h3>Tech Stacks </h3>Python, MySQL, Big data, Hadoop, Hive, Cloud computing, AWS</p>
          <p>Collaborated with the Data Engineering team on the Capstone Project to construct data pipelines and conduct data exploration leveraging cloud
            capabilities.
          </p>
          <p>Received the North Star Excellence Award for the top-performing team in the Capstone project, hosted by Incedo.
          </p>

        </div>
      </div>
    </div>
  )
}

export default PricingCard
