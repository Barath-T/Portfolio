import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./components/home/Home";

import Skills from "./components/skills/Skills";
import Skill from "./components/skills/Skill";

import Projects from "./components/projects/Projects";
import Project from "./components/projects/Project";

import Contact from "./components/contact/Contact";

import Admin from "./components/admin/Admin";
import SkillForm from "./components/admin/SkillForm";
import ProjectForm from "./components/admin/ProjectForm";
import DetailsForm from "./components/admin/DetailsForm";

import { GlobalStyled } from "./Global.styled";

const App = () => {
  return (
    <>
      <GlobalStyled />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="skills" element={<Skills />}>
              <Route path=":title" element={<Skill />} />
            </Route>
            <Route path="projects" element={<Projects />}>
              <Route path=":title" element={<Project />} />
            </Route>
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/admin/" element={<Admin />}>
            <Route path="skills" element={<SkillForm />} />
            <Route path="projects" element={<ProjectForm />} />
            <Route path="details" element={<DetailsForm />} />
          </Route>
        </Routes>
    </>
  );
};

export default App;
