import { Outlet, Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <h1>Admin Page</h1>
      <Link to="/admin/skills">Skill Form</Link>
      <Link to="/admin/projects">Project Form</Link>
      <Link to="/admin/details">Details Form</Link>
      <Outlet />
    </div>
  );
};

export default Admin;
