import React from "react";
import Sem3Data from "./Sem3";
import Sem4Data from "./Sem4";
import { useParams } from "react-router-dom";

const Sem = ({ semm }) => {
    const { subjectCode, department, semester } = useParams();

  console.log("i am here"+semm);
  if (semm === "sem1") {
    // Handle sem1 data
    return <Sem1Data />;
} else if (semm === "sem2") {
    // Handle sem2 data
    return <Sem2Data />;
} else if (semm === "sem3") {
    // Handle sem3 data
    return <div dangerouslySetInnerHTML={{ __html: Sem3Data[subjectCode] }} />;
} else if (semm === "sem4") {
    // Handle sem4 data
    return <div dangerouslySetInnerHTML={{ __html: Sem4Data[subjectCode] }} />;
} else if (semm === "sem5") {
    // Handle sem5 data
    return <Sem5Data />;
} else if (semm === "sem6") {
    // Handle sem6 data
    return <Sem6Data />;
} else if (semm === "sem7") {
    // Handle sem7 data
    return <Sem7Data />;
} else if (semm === "sem8") {
    // Handle sem8 data
    return <Sem8Data />;
} else {
    return <div>No data available for this semester</div>;
}

};

export default Sem;
