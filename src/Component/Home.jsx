import React from "react";
import "../App.css";
import Cse from "../Assets/College-Img/cse.jpg";
import collegeImg from "../Assets/College-Img/college.jpg";

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <div
        className="home-image d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${collegeImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <h1 className="curriculum text-center bg-primary text-white">COURSE CURRICULUM</h1>
      </div>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Select your department</h2>
        <div className="row justify-content-start">
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="box text-center">
              <a href="./department/cse">
                <img
                  src={Cse}
                  alt="CSE"
                  className="department-image img-fluid"
                />
                <h4>CSE</h4>
              </a>
            </div>
          </div>
          {/* Add more department columns if needed */}
        </div>
      </div>
    </div>
  );
};

export default Home;
