import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// 
import Layout from "./component/layoutComponent/Layout";
// pages

import About from "./pages/About";
import Tester from "./pages/Tester";
import Home from "./pages/Home";
import './app.css'
function App() {
  return (
   <>
  
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tester" element={<Tester />} />

        </Route>
      </Routes>
    
    </>
  );
}

export default App;