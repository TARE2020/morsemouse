import React from "react";
import styled from "@emotion/styled";

const Container = styled.main`
  height: 90%;
  width: 100%;
  background: #d3d3d3;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
`;

const Textarea = styled.textarea`
  width: 80%;
  height: 100%;
  margin-top: 5px;
  border-radius: 5px;
  border-color: #b5b5b5;
  color: #505050;
  box-shadow: inset 3px 3px 3px lightgrey;
`;

const Label = styled.label`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  height: 40%;
`;
const Main = () => {
  return (
    <Container>
      <Label>
        Text
        <Textarea />
      </Label>

      <Label>
        Morse
        <Textarea />
      </Label>
    </Container>
  );
};

export default Main;
