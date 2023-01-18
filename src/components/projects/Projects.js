import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { getAll } from "../../services/db";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => setProjects(await getAll("projects")))();
  }, []);

  const { name: projectName } = useParams();

  return (
    <div>
      <p>Projects</p>
      <div>
        {projectName
          ? projects.map((project) => (
              <Link to={`/projects/${project.name}`} key={project.id}>
                {project.name}
              </Link>
            ))
          : projects.map((project) => (
              <Link to={`/projects/${project.name}`} key={project.id}>
                -{project.name}-
              </Link>
            ))}
      </div>
      <Outlet
        context={{
          project: projects.find((project) => project.name === projectName),
        }}
      />
    </div>
  );
};

export default Projects;
