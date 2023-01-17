import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/skills" element={<Skills />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
