import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import SubjectSelector from "./Component/SubjectSelector";
import Testing from "./Component/testing";
const App = () => {
  return (
    <Router>
      <div>
        <div className="m-5"></div>
        <Routes>
          <Route path="/department/:department" element={<SubjectSelector />} />
          <Route path="/syllabus/:subjectCode" element={<Testing />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
