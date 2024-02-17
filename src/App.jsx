import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Header from "./Component/Header/Header";
import SubjectSelector from "./Component/SubjectSelector";
import Testing from "./Component/testing";
const App = () => {
  return (
    <div>
      <div className="m-5"></div>

      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route
              path="/department/:department"
              element={<SubjectSelector />}
            />
            <Route path="/syllabus/:subjectCode" element={<Testing />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
