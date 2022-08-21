import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Information from "./Information";
import Categories from "./Categories";
import SmallBanner from "./SmallBanner";
import CardBox from "./CardBox";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Contact from "./Contact";
const MainContainer = () => {
  return (
    <Container>
      <NavBar />
      <Banner />
      <Information />
      <Categories />
      <SmallBanner />
      <CardBox />
      <Contact />
      <Footer />
    </Container>
  );
};

export default MainContainer;

const Container = styled.div`
  width: 100%;
`;
