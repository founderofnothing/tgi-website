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
import SecretaryManagment from "./pages/SecretaryManagment";
import NursingInstitutionViewer from "./pages/NursingInstitutionViewer";
import ArtsAndScienceViewer from "./pages/ArtsAndScienceViewer";
import CollegeOfEducationViewer from "./pages/CollegeOfEducationViewer";
import CollegeofPhysiotherapyViewer from "./pages/CollegeofPhysiotherapyViewer";
function App() {
  return (
   <>
  
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/managment/chairman" element={<ChairmanManagment />} />
          <Route path="/managment/director" element={<DirectorManagement />} />
          <Route path="/managment/Secretary" element={<SecretaryManagment />} />


          {/* instutions */}

          <Route path="/Institutions/nursing" element={<NursingInstitutionViewer />} />
          <Route path="/Institutions/artsandscience" element={<ArtsAndScienceViewer />} />
          <Route path="/Institutions/collegeofeducation" element={<CollegeOfEducationViewer />} />
          <Route path="/Institutions/collegeofPhysiotherapy" element={<CollegeofPhysiotherapyViewer />} />






          <Route path="/tester" element={<Tester />} />

        </Route>
      </Routes>
    
    </>
  );
}

export default App;