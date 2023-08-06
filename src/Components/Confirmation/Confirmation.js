import React from "react";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Confirmation DONE !
      <div
        style={{
          border: "solid red",
          width: "50px",
          background: "red",
          color: "white",
          borderRadius: "5px",
          padding: "5px",
          cursor: "pointer",
        }}
        onClick={() => navigate(-1)}
      >
        back
      </div>
    </div>
  );
};

export default Confirmation;
