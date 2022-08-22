import React from "react";
import styled from "styled-components";
const SmallBanner = () => {
  return (
    <Container>
      <div className="smallbanner-container">
        <div className="infocontainer">
          <div className="infoheader">
            If life gives you lemons, make fruit juice.
          </div>
          <div className="subinfo">
            It is a long established fact that juice is very healthy and
            promotes good health and provides with various types of necessary
            vitamins and mineralts that we miss every day.
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SmallBanner;
const Container = styled.div`
  width: 100%;
  height: 700px;
  .smallbanner-container {
    height: 100%;
    background: url("https://assets.seedprod.com/9638-qTC9SZmNGcI5BgtQ.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    .infocontainer {
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 50px;
      width: 600px;
      height: 450px;
      .infoheader {
        font-size: 50px;
      }
      .subinfo {
        font-family: Ubuntu;
        font-size: 18px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    height: 400px;

    .smallbanner-container {
      background-size: cover;

      .infocontainer {
        width: 350px;
        height: 250px;
        .infoheader {
          font-size: 20px;
        }
        .subinfo {
          font-size: 16px;
        }
      }
    }
  }
`;
