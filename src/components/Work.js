import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">My Hands-on Project works</h1>
        <div className="project-container">
            {WorkCardData.map((val,ind)=>{
                return (
                    <WorkCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    techStack={val.techStack}
                    source={val.source}
                    view={val.view}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work