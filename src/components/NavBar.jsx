import React from "react";
import styled from "styled-components";
const NavBar = () => {
  return (
    <Container>
      <div className="logo">JuiceIt</div>
      <div className="links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#join">Join</a>
      </div>
    </Container>
  );
};

export default NavBar;
const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #230820;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 200px;
    display: flex;
    justify-content: center;
    font-size: 30px;
    color: white;
  }
  .links {
    width: 400px;
    display: flex;
    justify-content: space-around;
    a {
      font-family: Ubuntu;
      color: white;
      text-decoration: none;
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 600px) {
    height: 60px;
    .logo {
      width: 150px;
      display: flex;
      justify-content: center;
      font-size: 25px;
      color: white;
    }
    .links {
      width: 200px;
      display: flex;
      justify-content: space-around;
      a {
        font-family: Ubuntu;
        color: white;
        text-decoration: none;
        font-size: 15px;
      }
    }
  }
`;
