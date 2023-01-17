import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <p>
        <Link to="/">Home</Link>
        <em>.</em>
        <a href="/">Github</a>
        <em>.</em>
        <a href="/">Linked In</a>
        <em>.</em>
        <Link to="/contact">Contact</Link>
      </p>
      <p>Copyright©2023 Made by Barath</p>
    </div>
  );
};

export default Footer;
