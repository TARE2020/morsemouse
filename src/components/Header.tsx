import React from "react";
import styled from "@emotion/styled";
import mouseLogo from "../assets/mouseLogo.svg";
const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background: #545454;
`;

const HeaderLogo = styled.img`
  height: 80%;
  width: auto;
`;

const Headline = styled.h1`
  color: #d3d3d3;
  display: inline;
  font-family: "Russo One";
  font-weight: 400;
  padding: 0px;
  margin: 0px;
`;

const Header = () => {
  return (
    <HeaderBar>
      <HeaderLogo src={mouseLogo} alt="bla" />
      <Headline>MorseMouse</Headline>
    </HeaderBar>
  );
};

export default Header;
