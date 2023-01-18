import { useOutletContext } from "react-router-dom";

const Project = () => {
  const { project } = useOutletContext();

  if (!project) {
    return <></>;
  } else {
    return (
      <div>
        name: {project.name}
        <br />
        id: {project.id}
      </div>
    );
  }
};

export default Project;
