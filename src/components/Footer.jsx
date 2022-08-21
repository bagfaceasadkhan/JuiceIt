import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <Container>
      <div className="logocontainer">
        <GitHubIcon style={{ fill: "white" }} fontSize="medium" />
        <InstagramIcon style={{ fill: "white" }} fontSize="medium" />
        <LinkedInIcon style={{ fill: "white" }} fontSize="medium" />
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #230820;
  display: flex;
  justify-content: center;
  align-items: center;
  .logocontainer {
    width: 20%;
    display: flex;
    justify-content: space-between;
  }
  @media only screen and (max-width: 600px) {
    height: 60px;
    .logocontainer {
      width: 40%;
    }
  }
`;
