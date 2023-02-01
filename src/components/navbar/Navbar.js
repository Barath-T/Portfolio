import { Link } from "react-router-dom";

import Logo from "../svgs/Logo";
import Github from "../svgs/Github";

import { Div } from "./Navbar.styled.js";

const Navbar = () => {
  return (
    <Div>
      <Logo className="logo" styles={{ width: "50px", height: "50px" }} />
      <span className="name-available">
        <span>Barath T.</span>
        <span>Available</span>
      </span>
      <span className="pages">
        <Link to="/">Home</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Blog">Blog</Link>
        <Github styles={{ width: "25px", height: "25px" }} color="white" />
      </span>
    </Div>
  );
};

export default Navbar;
