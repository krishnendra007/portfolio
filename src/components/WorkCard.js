import "./WorkCardStyles.css";

import React from 'react'

const WorkCard = (props) => {
  return (
    <div className="work-container">
       
        <div className="project-container">
            <div className="project-card">
                <img src={props.imgsrc} alt="img" />
                <h2 className="project-title">{props.title}</h2>
                <div className="Pro-details">
                    <p>{props.text}</p>
                    <br/><br/>
                    <p>{props.techStack}</p>
                    <div className="pro-btns">
                        <a href={props.source} target='__blank'  className="btn">
                            Source
                        </a>
                        <a href={props.view} className="btn" target='__blank'>
                            View
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default WorkCard