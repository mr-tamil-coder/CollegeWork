import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubjectSelector from "./Component/SubjectSelector";
import Testing from "./Component/testing";
import Header from "./Component/Header/Header";
const Routing = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/department" element={<SubjectSelector />} />
          <Route path="/department/:department" element={<SubjectSelector />} />
          <Route path="/syllabus/:department/:semester/:subjectCode" element={<Testing />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Routing;
