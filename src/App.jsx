import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// 
import Layout from "./component/layoutComponent/Layout";
// pages

import About from "./pages/About";
import Tester from "./pages/Tester";
import Home from "./pages/Home";
import './app.css'
import ChairmanManagment from "./pages/ChairmanManagment";
import DirectorManagement from "./pages/DirectorManagement";
function App() {
  return (
   <>
  
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/managment/chairman" element={<ChairmanManagment />} />
          <Route path="/managment/director" element={<DirectorManagement />} />


          <Route path="/tester" element={<Tester />} />

        </Route>
      </Routes>
    
    </>
  );
}

export default App;