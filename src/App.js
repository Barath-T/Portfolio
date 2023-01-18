import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./components/home/Home";

import Skills from "./components/skills/Skills";
import Skill from "./components/skills/Skill";

import Projects from "./components/projects/Projects";
import Project from "./components/projects/Project";

import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />}>
            <Route path=":name" element={<Skill />} />
          </Route>
          <Route path="projects" element={<Projects />}>
            <Route path=":name" element={<Project />} />
          </Route>
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
