import React from "react";
import { VscDebugContinue } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
   <div className="landing">
    <div className="logo">
        <img
          src="https://www.thedigitalacademy.co.za/assets/DA/img/DA2.png"
          alt=""
        />
      </div>
      <div className="Continue" onClick={() => navigate("/rating")}>
        <h1>
          Continue <VscDebugContinue />{" "}
        </h1>
      </div>
   </div>
  );
};

export default Landing;
