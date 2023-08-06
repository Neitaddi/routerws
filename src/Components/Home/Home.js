import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      hello Home <br />
      <Button onClick={() => navigate("confirmation")}>Confirm</Button>
    </div>
  );
};

export default Home;
