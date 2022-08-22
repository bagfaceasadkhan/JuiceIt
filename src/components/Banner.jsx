import React from "react";
import styled from "styled-components";
const Banner = () => {
  return (
    <Container>
      <div id="home" className="banner-container">
        <div className="info">
          <div className="header-container">
            MADE WITH LOVE SPECIALLY FOR YOU
          </div>
          <div className="subtext-container">JUICE LYFE HEALTY LYFE</div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  width: 100%;
  height: 850px;
  .banner-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url("https://assets.seedprod.com/9638-xjbizKO0nuGpFCye.jpg");
    background-size: cover;
    .info {
      width: 100%;
      height: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      .header-container {
        font-size: 80px;
      }
      .subtext-container {
        font-family: "Ubuntu", sans-serif;
        font-size: 20px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    height: 450px;
    .banner-container {
      height: 100%;

      .info {
        .header-container {
          font-size: 18px;
        }
        .subtext-container {
          margin-top: 10px;
          font-family: "Ubuntu", sans-serif;
          font-size: 15px;
        }
      }
    }
  }
`;
