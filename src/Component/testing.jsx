import React from "react";
import { useParams } from "react-router-dom";
import "./SubjectSelector.css";
import { Link } from "react-router-dom";

import SubjectSyllabus from "./SubjectSyllabus";
import Sem from "./Syllabus/CseSyllabus/Sem";
import { SubjectSelector } from "./SubjectSelector";
// import HandleSubjectClick  from "./SubjectSelector";
const Testing = () => {
  const { subjectCode, department, semester } = useParams();

  console.log(useParams());

  // var syllabus = syllabusData[subjectCode];

  const subject = subjectCode.slice(0, 7);
  return (
    <div className="containter p-5 content">
      {/* <HandleSubjectClick /> */}
      <div className="previous-btn btn-danger">
        <Link to={`/department/${department}`} className="link-style">
          Back
        </Link>
      </div>
      <div className="previous-btn mx-2">
        <Link to={`/`} className="link-style">
          Home
        </Link>
      </div>
      <div className="subject-content">
        <h2 className="hello">Syllabus for {subject}</h2>
        <Sem semm={semester} />

        {/* <div dangerouslySetInnerHTML={{ __html: syllabus }}></div> */}
      </div>
    </div>
  );
};

export default Testing;
