import React from "react";
import Sem3Data from "./Sem3";
import Sem4Data from "./Sem4";
import { useParams } from "react-router-dom";

const Sem = ({ semm }) => {
    const { subjectCode, department, semester } = useParams();

  console.log("i am here"+semm);
  if (semm === "sem3") {
    return <div dangerouslySetInnerHTML={{ __html: Sem3Data[subjectCode] }} />;
  } else if (semm === "sem4") {
    return <Sem4Data />;
  } else {
    return <div>No data available for this semester</div>;
  }
};

export default Sem;
