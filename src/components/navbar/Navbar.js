import { Link } from "react-router-dom";

import Logo from "../svgs/Logo";
import Github from "../svgs/Github";

const Navbar = () => {
  return (
    <div>
      <Logo styles={{ width: "50px", height: "50px" }} />
      <span>
        <span>Barath T.</span>
      </span>
      <span>
        <Link to="/">Home</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Blog">Blog</Link>
      </span>
      <Github />
    </div>
  );
};

export default Navbar;
