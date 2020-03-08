import React from "react";
import styled from "@emotion/styled";
type FooterProps = {
  isEmergency: boolean;
  toggleEmergency: any;
  togglePlayback: any;
};
const FooterBar = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
`;

const Button = styled.button`
  flex-grow: 1;
  height: 100%;
  background-color: #545454;
  border: none;
  color: #d3d3d3;
  font-family: "Russo One";
  font-size: 1.3rem;
  text-shadow: 2px 2px 10px black;
  border-right: 1px solid #d3d3d3;
  border-left: 1px solid #d3d3d3;
`;

const Footer = ({
  isEmergency,
  toggleEmergency,
  togglePlayback
}: FooterProps) => {
  return (
    <FooterBar>
      <Button onClick={togglePlayback}>PLAY</Button>
      <Button onClick={toggleEmergency}>SOS</Button>
    </FooterBar>
  );
};

export default Footer;
