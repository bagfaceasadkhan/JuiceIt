import React from "react";
import styled from "styled-components";
const Contact = () => {
  return (
    <Container>
      <div className="header">STAY IN THE LOOP</div>
      <div className="input">
        <input type="text" placeholder="  ENTER YOUR MESSAGE" />
      </div>
      <div className="button">
        <button>SUBSCRIBE</button>
      </div>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  width: 100%;
  height: 250px;
  background-color: #f9cf8d;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  .header {
    font-size: 50px;
  }
  .input {
    input[type="text"] {
      font-family: Ubuntu;
      width: 625px;
      height: 50px;
      border: none;
      outline: none;
    }
  }
  .button {
    button {
      width: 625px;
      height: 50px;
      font-size: 30px;
      font-family: Ubuntu;
      color: white;
      background-color: black;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 200px;
    .header {
      font-size: 30px;
    }
    .input {
      input[type="text"] {
        font-family: Ubuntu;
        width: 400px;
        height: 50px;
        border: none;
        outline: none;
      }
    }
    .button {
      button {
        width: 400px;
        height: 50px;
        font-size: 20px;
        outline: none;
        border: none;
      }
    }
  }
`;
