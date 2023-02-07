import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

import { getAll } from "../../services/db";

import { AllDispDiv, Div } from "../skills/Skills.styled.js";
import { ProjectLink } from "./Projects.styled.js";

const colors = ["#f7df1e", "#ff470f", "#d16098", "#e81c4f", ];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  
  let color = -1;
  let colorsMap = new Map();
  let imgCount = 0;

  projects.map((project)=>{
    color = (colors.length-1>color)?color+1:0;
    colorsMap.set(project._id, colors[color]);
   }
  ); 
  useEffect(() => {
    (async () => setProjects(await getAll("projects")))();
  }, []);

  const { title } = useParams();

  return (
    <Div titlesize={title ? "1.5rem" : ""}>
      <span className="title">Projects:</span>
      {title ? (
        <span className="title-list">
        {projects.map((project) => (
          <Link to={`/projects/${project.title}`} key={project._id}>
            {project.title}
          </Link>
        ))}
        </span>
      ) : (
        <AllDispDiv>
          {projects.map((project) => {
            return (
                <ProjectLink to={`/projects/${project.title}`} key={project._id} year={project.year} linkcolor={colorsMap.get(project._id)}>
                <span className="title-desc">
                  <span className="project-title">{project.title}</span>
                  <span className="desc">{project.quick}</span>
                </span>
                  <span className="tagline">{project.tagLine}</span>
                  <span className="img-span">
                {project.tools.map((tool)=>{
                    imgCount++;
                    if(imgCount>3){
                      return null;
                    }
                    else{
                      return (<img key={tool.name} src={tool.img} alt={tool.name} />)
                    }
                  })
                 }
                 </span>
              </ProjectLink>
            );
          })}
        </AllDispDiv>
      )}
      <Outlet
        context={{
          project: projects.find((project) => project.title === title),
          colors: colorsMap,
        }}
      />
    </Div>
  );
};

export default Projects;
