import Logo from "../svgs/Logo";
import Github from "../svgs/Github";

import { Div, NavLink } from "./Navbar.styled.js";

const Navbar = () => {
  return (
    <Div>
      <Logo className="logo" styles={{ width: "50px", height: "50px" }} />
      <span className="name-available">
        <span>Barath T.</span>
        <span className="available">
          Available <strong>June 2023</strong>
        </span>
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
        <a className="github" href="/">
          <Github />
        </a>
      </span>
    </Div>
  );
};

export default Navbar;
