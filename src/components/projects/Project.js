import { useOutletContext } from "react-router-dom";

import { Div } from "./Project.styled.js";

const Project = () => {
  const { project, colors } = useOutletContext();


  if (!project) {
    return null;
  } else {
    return (
      <Div mycolor={colors.get(project._id)}>
        <div className="header-portion">
            <h1>{project.title}</h1>
            <div className="below-title">
              <span className="catchy">
                 <span>{project.description[0]}</span>
                 <span>{project.description[1]}</span>
                 <span>{project.description[2]}</span>
               </span>
              <span className="desc">{project.description[3]}</span>
            </div>
        </div>
        <div className="tools-portion">
            {project.tools.map((tool)=>{
              return (<span key={tool.name}> <img src={tool.img} alt={tool.name}/><span>{tool.name}</span></span>);
          })
         }
        </div>
        <div className="screenshot-portion">
            {project.imgs.map(image=>{
              return <img key={image.name} src={image.img} alt={image.name} />;
             })
           }
        </div>
      </Div>
    );
  }
};

export default Project;
