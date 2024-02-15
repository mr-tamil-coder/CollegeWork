import React, { useState } from 'react';
import cseSubjects from './Dept/CseSubjects';
import { useParams } from 'react-router-dom';
import {Table,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SubjectSelector = () => {
  const [regulation, setRegulation] = useState('');
  const [semester, setSemester] = useState('');
  const [department, setDepartment] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  
  // Use the useParams hook to access URL parameters
  const { department: departmentParam } = useParams();
  
  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
    const departmentSubjects = getDepartmentSubjects();
    setSelectedSubjects(departmentSubjects[regulation][event.target.value] || []);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
    setSelectedSubjects([]);
  };

  const getDepartmentSubjects = () => {
    switch (departmentParam) {
      case 'cse':
        return cseSubjects;
      // Add cases for other departments
      default:
        return {};
    }
  };

  return (
    <Container >
      <label>Select Regulation:</label>
      <select value={regulation} onChange={(event) => setRegulation(event.target.value)}>
        <option value="">Select Regulation</option>
        <option value="2019">2019</option>
        <option value="2021">2021</option>
      </select>
      <br />
      <label>Select Semester:</label>
      <select value={semester} onChange={handleSemesterChange} disabled={!regulation}>
        <option value="">Select Semester</option>
        {[...Array(8)].map((_, index) => (
          <option key={index + 1} value={index + 1}>{index + 1}</option>
        ))}
      </select>
      <br />
      <br />
      <h3>Subjects With Code :</h3>
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
              <td>{subject.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default SubjectSelector;
