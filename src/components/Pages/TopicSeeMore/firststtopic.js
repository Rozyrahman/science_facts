import React from "react";
import { Container } from "react-bootstrap";
import FristFact from "../../../img/topic1.png";

const firststtopic = () => {
  return (
    <Container>
      <h2>Oxygen has a colour</h2>
      <h4> - Reader's Digest</h4>
      <p>
        As a gas, oxygen is odourless and colourless. In its liquid and solid
        forms, however, it looks pale blue.
      </p>
      <img alt="" src={FristFact} />
    </Container>
  );
};

export default firststtopic;
