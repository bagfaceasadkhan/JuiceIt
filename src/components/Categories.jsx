import React from "react";
import styled from "styled-components";
const Catgories = () => {
  return (
    <Container>
      <div id="join" className="card-container">
        <div className="card">
          <div className="image-one"></div>
          <div className="header">Cleanes</div>
          <div className="subinfo">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>
        <div className="card">
          <div className="image-two"></div>
          <div className="header">Juices</div>
          <div className="subinfo">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>
        <div className="card">
          <div className="image-three"></div>
          <div className="header">GreenTea</div>
          <div className="subinfo">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Catgories;

const Container = styled.div`
  height: 600px;
  background-color: #f9cf8d;
  display: flex;
  justify-content: center;
  align-items: center;
  .card-container {
    width: 1200px;
    height: 350px;
    display: flex;
    justify-content: space-between;
    .card {
      width: 300px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: space-between;
      .image-one {
        height: 55%;
        background: url("https://templateapp.seedprod.com/wp-content/uploads/2021/08/Group-465-300x192.png");
      }
      .image-two {
        height: 55%;
        background: url("https://assets.seedprod.com/9638-0xfNkMZP7owbQ1lR.png");
      }
      .image-three {
        height: 55%;
        background: url("https://templateapp.seedprod.com/wp-content/uploads/2021/08/Group-465-2-300x192.png");
      }
      .header {
        font-size: 25px;
      }
      .subinfo {
        font-family: Ubuntu;
        font-size: 18px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    height: 1200px;
    .card-container {
      width: 100%;
      height: 100%;
      margin-bottom: 20px;
      align-items: center;
      flex-direction: column;
      .card {
        margin-top: 50px;
      }
    }
  }
`;
