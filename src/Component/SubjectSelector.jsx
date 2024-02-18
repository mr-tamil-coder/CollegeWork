import React, { useState, useEffect } from "react";
import cseSubjects from "./Dept/CseSubjects";
import { useParams } from "react-router-dom";
import { Table, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SubjectSelector.css";

const SubjectSelector = () => {
  const [regulation, setRegulation] = useState("");
  const [semester, setSemester] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const { department: departmentParam } = useParams();

  useEffect(() => {
    // Load subjects when regulation and semester are selected
    if (regulation && semester) {
      const departmentSubjects = getDepartmentSubjects();
      setSelectedSubjects(departmentSubjects[regulation][semester] || []);
    }
  }, [regulation, semester]);

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
    setShowResults(false); // Hide results when semester changes
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

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <Container className="subject-selector-container">
      <label className="select-label">Select Regulation:</label>
      <select
        value={regulation}
        className="select-input"
        onChange={(event) => setRegulation(event.target.value)}
      >
        <option value="">Select Regulation</option>
        <option value="2019">2019</option>
        <option value="2021">2021</option>
      </select>
      <br />
      <label className="select-label">Select Semester:</label>
      <select
        value={semester}
        className="select-input"
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
                    <a href={`/syllabus/${subject.code}${regulation}`} target="_blank">
                      {subject.name}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </Container>
  );
};

export default SubjectSelector;
