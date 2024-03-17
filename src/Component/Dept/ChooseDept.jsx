import React from 'react'
import cseSubjects from "./Subjects/CseSubjects";
import { useParams } from 'react-router-dom';
const ChooseDepartmentSubjects = () => {
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

export {ChooseDepartmentSubjects}