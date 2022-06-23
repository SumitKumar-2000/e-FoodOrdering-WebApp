import React from "react";
import { Container, Row } from "react-bootstrap";
import "../../components/headScreen/headscreen.css";

const HeadScreen = ({ title, children }) => {
  return (
    <div className="mainback">
      <Container>
        <Row>
          <div className="page">
            {title && (
              <>
                <div className="heading">{title}</div>
                <hr />
              </>
            )}
          </div>
          {children}
        </Row>
      </Container>
    </div>
  );
};

export default HeadScreen;
