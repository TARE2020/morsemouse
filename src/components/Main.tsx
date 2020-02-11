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
  const [inputText, setInputText] = React.useState("");
  const [resultText, setResultText] = React.useState("");

  const characterToCode: any = {
    A: "·−",
    B: "−···",
    C: "−·−·",
    D: "−··",
    E: "·",
    F: "··−·",
    G: "−−·",
    H: "····",
    I: "··",
    J: "·−−−",
    K: "−·−",
    L: "·−··",
    M: "−−",
    N: "−·",
    O: "−−−",
    P: "·−−·",
    Q: "−−·−",
    R: "·−·",
    S: "···",
    T: "−",
    U: "··−",
    V: "···−",
    W: "·−−",
    X: "−··−",
    Y: "−·−−",
    Z: "−−··"
  };

  const textToMorseCode = () => {
    const inputValue = inputText.split("");
    let resultCharacters: any = [];
    inputValue.map((character: string) => {
      const upperCaseCharacter: string = character.toUpperCase();
      const preparedCharacter: number = upperCaseCharacter.charCodeAt(0);
      if (character === " ") {
        resultCharacters.push("/");
      } else if (preparedCharacter > 64 && preparedCharacter < 91) {
        resultCharacters.push(characterToCode[upperCaseCharacter]);
      }
      const resultText = resultCharacters.join(" ");
      setResultText(resultText);
      return null;
    });
  };

  React.useEffect(() => textToMorseCode(), [inputText]);
  return (
    <Container>
      <Label>
        Text
        <Textarea
          value={inputText}
          onChange={event => {
            setInputText(event.target.value);
          }}
        />
      </Label>

      <Label>
        Morse
        <Textarea value={resultText} />
      </Label>
    </Container>
  );
};

export default Main;
