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
            <p className="btc">Software Engineer Trainee</p>
            <p>July 2022-Present</p>
            <p>  <h3>Tech stacks</h3> Computer Networking, Load balancing, Linux, Harmony Controller, Advance Core Operating System,
                  Application Firewall, Proxy Server
            </p>
            <p>Working with TAC team for A10 Networks to provide advance security and traffic management services and products like load balancers ,
                application firewall to clients.
            </p>
        </div>

        <div className="card">
            <h3> Incedo Technology Solutions</h3>
            <span className="bar">
            </span>
            <p className="btc">Software Engineer intern</p>
            <p>Jan 2022-July 2022</p>
            <p><h3>Tech Stacks </h3>Python, MySQL, Big data, Hadoop, Hive, Cloud computing, AWS</p>
            <p>work with D&AI team to build data pipelines and explore data using cloud capabilities.
            </p>
            
        </div>
        </div>
    </div>
  )
}

export default PricingCard