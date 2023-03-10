import { Link } from "react-router-dom";

import { Div } from "./Footer.styled";

const Footer = ({ details }) => {
  return (
    <Div>
      <p className="links">
        <Link to="/">Home</Link>
        <em>•</em>
        <a href={details.github}>Github</a>
        <em>•</em>
        <a href={details.linkedin}>Linked In</a>
        <em>•</em>
        <Link to="/contact">Contact</Link>
      </p>
      <p className="cp">Copyright©2023 Made by Barath</p>
    </Div>
  );
};

export default Footer;
