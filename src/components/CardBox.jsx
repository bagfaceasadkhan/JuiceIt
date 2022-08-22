import React from "react";
import styled from "styled-components";

const CardBox = () => {
  return (
    <Container>
      <div id="about" className="cardcontainer">
        <div className="card-one card">
          <div className="header">AboutUs</div>
          <div className="subinfo">
            Established in 1998, ‘JuiceIt’ Fit Food and Juice Bars is New York’s
            unique juice, smoothie and sound cheap food retailer. Presently with
            30 stores crosswise over US, we work irately to be steady
            trailblazers and pioneers in good dieting, determined to enhance the
            prosperity of groups and clients consistently!
          </div>
        </div>
        <div className="card-two card">
          <div className="header">OurStory</div>
          <div className="subinfo">
            Our journey started a couple years ago when we decided to start
            juicing in our home. There is truly nothing like fresh pressed
            juice, the taste is amazing, and the health benefits are endless.
            Some people juice for the health benefits, yet others actually use
            it to help battle health deficiencies.
          </div>
        </div>
        <div className="card-three card">
          <div className="header">Location</div>
          <div className="subinfo">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
            McClintock's eye for detail certainly helped narrow the whereabouts
            of lorem ipsum's origin, however, the “how and when” still remain
            something of a mystery, with competing theories and timelines.
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CardBox;

const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9cf8d;
  .cardcontainer {
    display: flex;
    justify-content: space-between;
    width: 65%;
    height: 70%;
    .card {
      font-size: 25px;
      padding: 0px 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .subinfo {
        font-family: Ubuntu;
        font-size: 18px;
        line-height: 30px;
      }
    }
    .card-one {
      height: 100%;
      width: 30%;
      background-color: #ffab65;
    }
    .card-two {
      height: 100%;
      width: 30%;
      background-color: #ffbe40;
    }
    .card-three {
      height: 100%;
      width: 30%;
      background-color: #bde6ce;
    }
  }

  @media only screen and (max-width: 600px) {
    height: 1000px;
    width: 100%;
    .cardcontainer {
      width: 100%;
      height: 100%;
      flex-direction: column;
      .card {
        width: 100%;
        font-size: 20px;
        .subinfo {
          font-size: 16px;
        }
      }
    }
  }
`;
