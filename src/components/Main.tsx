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
  const [text, setText] = React.useState("");
  const [morseCode, setMorseCode] = React.useState("");
  const [translateTo, setTranslateTo] = React.useState("");

  const alphabet: any = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--.."
  };

  const textToMorseCode = () => {
    const inputValue = text.split("");
    let resultCharacters: any = [];
    inputValue.map((character: string) => {
      const upperCaseCharacter: string = character.toUpperCase();
      const preparedCharacter: number = upperCaseCharacter.charCodeAt(0);
      if (character === " ") {
        resultCharacters.push("/");
      } else if (preparedCharacter > 64 && preparedCharacter < 91) {
        resultCharacters.push(alphabet[upperCaseCharacter]);
      }
      const resultText = resultCharacters.join(" ");
      setMorseCode(resultText);
      return null;
    });
  };

  const morseCodeToText = () => {
    const inputValue = morseCode.split(" ");
    let resultCode: any = [];
    inputValue.map((codeFragment: string) => {
      if (codeFragment === " ") {
        resultCode.push("");
      } else if (codeFragment === "/") {
        resultCode.push(" ");
      } else if (inputValue) {
        const translatedCodeFragment = Object.keys(alphabet).find(
          key => alphabet[key] === codeFragment
        );
        resultCode.push(translatedCodeFragment);
      }
      const resultText = resultCode.join("");
      setText(resultText);
    });
  };

  const handleChange = (method: string, event: any) => {
    setTranslateTo(method);
    if (translateTo === "toCode") {
      setText(event.target.value);
    } else if (translateTo === "toText") {
      setMorseCode(event.target.value);
    }
  };

  React.useEffect(() => {
    if (translateTo === "toCode") {
      textToMorseCode();
    } else if (translateTo === "toText") {
      morseCodeToText();
    }
  }, [text, morseCode]);

  return (
    <Container>
      <Label>
        Text
        <Textarea
          value={text}
          onChange={event => {
            handleChange("toCode", event);
          }}
        />
      </Label>

      <Label>
        Morse
        <Textarea
          value={morseCode}
          onChange={event => {
            handleChange("toText", event);
          }}
        />
      </Label>
    </Container>
  );
};

export default Main;
