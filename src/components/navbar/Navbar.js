import { Link } from "react-router-dom";

import Logo from "../svgs/Logo";
import Github from "../svgs/Github";

import { Div, NavLink } from "./Navbar.styled.js";

const Navbar = ({ details }) => {
  return (
    <Div>
      <Link to="/">
      <Logo className="logo" styles={{ width: "50px", height: "50px" }} />
      </Link>
      <span className="name-available">
        <span>Barath T.</span>
        <Link to="/contact" className="available">
          Available <strong>{(new Date(details.available)).toLocaleString("default", { month: "short" }) + " " + (new Date(details.available)).getFullYear()} </strong>
        </Link>
      </span>
      <span className="pages">
        <NavLink to="/" inputcolor="">
          Home
        </NavLink>
        <NavLink to="/Skills" inputcolor="#fee16d">
          Skills
        </NavLink>
        <NavLink to="/Projects" inputcolor="#004fff">
          Projects
        </NavLink>
        <NavLink to="/Contact" inputcolor="#de7f2b">
          Contact
        </NavLink>
        <NavLink to="/Blog" inputcolor="#b86bff">
          Blog
        </NavLink>
        <a className="github" href={details.github}>
          <Github />
        </a>
      </span>
    </Div>
  );
};

export default Navbar;
