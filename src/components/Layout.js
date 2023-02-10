import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const Layout = ({ details }) => {
  return (
    <>
      <Navbar details={ {github: details.github, available: details.available} }/>
      <Outlet />
      <Footer details={ {github: details.github, linkedin: details.linkedin} }/>
    </>
  );
};

export default Layout;
