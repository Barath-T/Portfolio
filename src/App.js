import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "./components/Layout";

import Home from "./components/home/Home";

import Skills from "./components/skills/Skills";
import Skill from "./components/skills/Skill";

import Projects from "./components/projects/Projects";
import Project from "./components/projects/Project";

import Contact from "./components/contact/Contact";

import Blog from "./components/blog/Blog";

import Admin from "./components/admin/Admin";
import SkillForm from "./components/admin/SkillForm";
import ProjectForm from "./components/admin/ProjectForm";
import DetailsForm from "./components/admin/DetailsForm";

import { GlobalStyled } from "./Global.styled";

import { getDetails } from "./services/details.js";

const App = () => {
  const [details, setDetails] = useState({});
  
  useEffect(()=>{
    (async()=>{
    setDetails(await getDetails());
    })();
  }, []);

  return (
    <>
      <GlobalStyled />
        <Routes>
          <Route path="/" element={<Layout details={details}/>}>
            <Route index element={<Home details={{github: details.github, linkedin: details.linkedin}}/>} />
            <Route path="skills" element={<Skills />}>
              <Route path=":title" element={<Skill />} />
            </Route>
            <Route path="projects" element={<Projects />}>
              <Route path=":title" element={<Project />} />
            </Route>
            <Route path="contact" element={<Contact details={{email: details.email, github: details.github, linkedin: details.linkedin}}/>} />
            <Route path="blog" element={<Blog />} />
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
