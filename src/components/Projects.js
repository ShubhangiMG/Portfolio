
import React from "react";
import { projects } from "./data";

// import { useState, useEffect, useRef } from 'react';
// import sr from '@utils/sr';

import IconGithub from "./icons/github";
import ExtIcon from "./icons/external";
export default function Projects() {
  
// const styleview=styled.view`
// .projects-list:nth-of-type(2) .proj-img{
//   grid-column: 1 / 8;
// }
// .projects-list:nth-of-type(2) .project-content{
//   grid-column: 7 / -1;
//     text-align: right;
// }
// `

  return (


    <section id="projects" className="container text-white body-font min-vh-100 pt-5">
      <h1 className="text-center font-weight-bold p-4">Few projects I have worked on</h1>
      {projects.map((data, key) => {
    return (
        <Project
          key={key}
          title={data.title}
          description={data.description}
          link={data.link}
          image={data.image}
          skills={data.skills}
        />
    );
  })}
    </section>
  );
}


const Project=({title,description,link,image,skills})=>{
  return(
        <li className="projects-list">
          <div class="project-content">
              <div>
                <h3>Featured project</h3>
                <h1><a href="">{title}</a></h1>
                <div className="project-detail">
                  <p>{description}</p>
                </div>
                
                <ul className="skill-list p-0">
                  {skills.map((texh,i)=>(
                  <li key={i}>{texh}</li>
                  ))}
                </ul>
                <div className="proj-links">
                  <a href="#{link}"><IconGithub/></a>
                  <a href="#"><ExtIcon/></a>
                </div>
              </div>
          </div>
          <div className="proj-img"><a href="#"><img src={image}/></a></div>
        </li>
  );
};

// const [showMore, setShowMore] = useState(false);
//   const prefersReducedMotion = usePrefersReducedMotion();

//   useEffect(() => {
//     if (prefersReducedMotion) {
//       return;
//     }

//   }, []);