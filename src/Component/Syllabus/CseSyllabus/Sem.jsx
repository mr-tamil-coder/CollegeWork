import React from "react";
import Sem1Data from "./Sem1";
import Sem3Data from "./Sem3";
import Sem4Data from "./Sem4";

import Sem7Data from "./Sem7";
// import Sem5Data from "./Sem5"
import Sem5data from "./Sem5";
import { useParams } from "react-router-dom";
import Sem8Data from "./Sem8";
import Sem6Data from "./Sem6";
import Sem2Data from "./Sem2Data";

const Sem = ({ semm }) => {
  const { subjectCode, department, semester } = useParams();

  console.log("i am here" + semm);
  if (semm === "sem1") {
    // Handle sem1 data
    return <div dangerouslySetInnerHTML={{ __html: Sem1Data[subjectCode] }} />;
  } else if (semm === "sem2") {
    // Handle sem2 data
    return <div dangerouslySetInnerHTML={{ __html: Sem2Data[subjectCode] }} />;
  } else if (semm === "sem3") {
    // Handle sem3 data
    return <div dangerouslySetInnerHTML={{ __html: Sem3Data[subjectCode] }} />;
  } else if (semm === "sem4") {
    // Handle sem4 data
    return <div dangerouslySetInnerHTML={{ __html: Sem4Data[subjectCode] }} />;
  } else if (semm === "sem5") {
    // Handle sem5 data
    return <div dangerouslySetInnerHTML={{ __html: Sem5data[subjectCode] }} />;
  } else if (semm === "sem6") {
    // Handle sem6 data
    return <div dangerouslySetInnerHTML={{ __html: Sem6Data[subjectCode] }} />;
  } else if (semm === "sem7") {
    // Handle sem7 data
    return <div dangerouslySetInnerHTML={{ __html: Sem7Data[subjectCode] }} />;
  } else if (semm === "sem8") {
    // Handle sem8 data
    return <div dangerouslySetInnerHTML={{ __html: Sem8Data[subjectCode] }} />;
  } else {
    return <div>No data available for this semester</div>;
  }
};

export default Sem;
