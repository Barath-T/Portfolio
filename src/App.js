import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Skill from "./components/skills/Skill";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />}>
            <Route path=":name" element={<Skill />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
