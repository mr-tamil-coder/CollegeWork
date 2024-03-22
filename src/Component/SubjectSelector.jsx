import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Table, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SubjectSelector.css";
import cseSubjects from "./Dept/Subjects/CseSubjects";
import Testing from "./testing";
function handleSubjectClick(subname) {
  console.log(subname);
}
const SubjectSelector = () => {
  const [regulation, setRegulation] = useState(
    localStorage.getItem("regulation") || ""
  );
  const [semester, setSemester] = useState(
    localStorage.getItem("semester") || ""
  );
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const { department: departmentParam } = useParams();

  useEffect(() => {
    // Retrieve selected subjects from local storage when component mounts
    const storedSubjects = JSON.parse(localStorage.getItem("selectedSubjects"));
    if (storedSubjects) {
      setSelectedSubjects(storedSubjects);
      setShowResults(true);
    }
  }, []);

  const handleSemesterChange = (event) => {
    const selectedSemester = event.target.value;
    setSemester(selectedSemester);
    localStorage.setItem("semester", selectedSemester);

    setShowResults(false); // Hide results when semester changes
  };

  const handleSubmit = () => {
    const departmentSubjects = getDepartmentSubjects();
    const subjects = departmentSubjects[regulation][semester] || [];
    setSelectedSubjects(subjects);

    // Store selected subjects in local storage
    localStorage.setItem("selectedSubjects", JSON.stringify(subjects));

    setShowResults(true);
  };

  const getDepartmentSubjects = () => {
    switch (departmentParam) {
      case "cse":
        return cseSubjects;
      case "ece":
        return cseSubjects;
      // Add cases for other departments
      default:
        return {};
    }
  };
  const handleOptions = (event) => {
    setRegulation(event.target.value);
    localStorage.setItem("regulation", event.target.value);
  };

  return (
    <Container className="subject-selector-container">
      <h5>
        Current Department:{" "}
        <span className="capitalize">{departmentParam}</span>{" "}
      </h5>
      <div className="form-group row">
        <label htmlFor="regulationSelect" className="col-sm-2 col-form-label">
          Select Regulation:
        </label>
        <div className="col-sm-8">
          <div className="input-group">
            <select
              id="regulationSelect"
              className="form-select"
              value={regulation}
              onChange={handleOptions}
            >
              <option value="">Select Regulation</option>
              <option value="2019">2019</option>
              <option value="2021" disabled>2021</option>
            </select>
          </div>
        </div>
      </div>
      <br />
      <div className="form-group row">
        <label htmlFor="semesterSelect" className="col-sm-2 col-form-label">
          Select Semester:
        </label>
        <div className="col-sm-8">
          <div className="input-group">
            <select
              id="semesterSelect"
              className="form-select"
              value={semester}
              onChange={handleSemesterChange}
              disabled={!regulation}
            >
              <option value="">Select Semester</option>
              {[...Array(8)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Button onClick={handleSubmit}>Submit</Button>
      <br />
      <br />
      {showResults && (
        <>
          <h3 className="subject-header">Subjects With Code :</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Subject Code</th>
                <th>Subject Name</th>
              </tr>
            </thead>
            <tbody>
              {selectedSubjects.map((subject, index) => (
                <tr key={index}>
                  <td>{subject.code}</td>
                  <td>
                    <a
                      href={`/syllabus/${departmentParam}/sem${semester}/${subject.code}${regulation}`}
                      onClick={() => {
                        console.log("Clicked");
                      }}
                    >
                      {subject.name}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* <Testing  subjectName={subject.name}/> */}
        </>
      )}
    </Container>
  );
};

export { SubjectSelector, handleSubjectClick };
