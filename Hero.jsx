import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import hero from "./assets/hero.png";

function AutoLayoutExample() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (button) => {
    setActiveButton(button);
  };
  return (
    <Container className="hero-section py-5">
      <Row>
        <Col>
          <div className="hero-section-left">
            <div className="small-font-1 p-2 border-none rounded-5">
              #1 Editors Choice App of 2020
            </div>
            <div className="big-font p-2">
              Best app for your <br></br> modern lifestyle
            </div>
            <div className="small-font-2 py-3">
              Increase productivity with a simple to-do app. app for<br></br>
              managing your personal budgets
            </div>
            <div>
              <Button
                variant="primary"
                className={`nav-button ${
                  activeButton === "free" ? "active" : ""
                }`}
                onClick={() => handleClick("free")}
              >
                Try for Free
              </Button>
              <Button
                variant="primary"
                className={`nav-button ${
                  activeButton === "demo" ? "active" : ""
                }`}
                onClick={() => handleClick("demo")}
              >
                Watch Demo Video
              </Button>
            </div>
          </div>
        </Col>
        <Col>
          <div className="hero-section-right">
            <img
              src={hero}
              alt=""
              style={{ width: "300px", height: "500px" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;
