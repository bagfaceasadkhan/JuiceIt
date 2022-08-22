import React from "react";
import styled from "styled-components";
const Information = () => {
  return (
    <Container>
      <div className="image-about-container">
        <div className="image"></div>
        <div className="about">
          <div className="info-container">
            THE BEST QUALITY JUICE EVER TASTED
          </div>
          <div className="subinfo-container">
            Juice is a drink made from the extraction or pressing of the natural
            liquid contained in fruit and vegetables. It can also refer to
            liquids that are flavored with concentrate or other biological food
            sources, such as meat or seafood, such as clam juice.
          </div>
          <div className="button-container">
            <button>JOIN US</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Information;

const Container = styled.div`
  height: 500px;
  background-color: #f9cf8d;
  display: flex;
  justify-content: center;
  align-items: center;
  .image-about-container {
    width: 1200px;
    display: flex;

    justify-content: space-between;

    .image {
      width: 500px;
      height: 435px;
      background: url("https://assets.seedprod.com/9638-A2YRkcBhtb8zypDq.png");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    .about {
      width: 500px;
      height: 435px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .info-container {
        font-size: 50px;
      }
      .subinfo-container {
        font-size: 18px;
        font-family: Ubuntu;
      }
    }
    .button-container {
      button {
        background-color: black;
        width: 200px;
        height: 70px;
        color: white;
        font-family: Ubuntu;
        font-size: 18px;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    height: 650px;

    .image-about-container {
      display: flex;
      align-items: space-between;
      flex-direction: column;
      justify-content: space-around;
      width: 100%;
      height: 100%;
      .image {
        width: 100%;
        height: 300px;
        background-size: contain;
      }
      .about {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        width: 100%;
        height: 300px;
        .info-container {
          margin-top: 10px;
          font-size: 18px;
        }
        .subinfo-container {
          width: 100%;
          font-size: 16px;
          margin-top: 10px;
          text-align: center;
        }
      }
    }
  }
`;
