import { useOutletContext } from "react-router-dom";

const Skill = () => {
  const { skill } = useOutletContext();

  if (!skill) {
    return <></>;
  } else {
    return (
      <div>
        name:{skill.name}
        <br />
        id:{skill.id}
      </div>
    );
  }
};

export default Skill;
