import React from "react";
import styled from "styled-components";
import Body from "../../components/Body/Body";
import HomeCard from "../../components/HomeCard";

const Heading = styled.section`
  padding: 50px;
`;
const Title = styled.h1`
  width: 35%;
  @media only screen and (max-width: 850px) {
    width: 50%;
  }
  @media only screen and (max-width: 650px) {
    width: 75%;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;
const HeroCardCarousel = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  .card1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .card2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .card3 {
    grid-area: 1 / 3 / 2 / 4;
  }
  @media only screen and (max-width: 850px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0;
    grid-row-gap: 0;
    .card1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    .card2,
    .card3 {
      display: none;
    }
  }
`;

const Home = () => {
  return (
    <>
      <nav className="mg-s20">
        <div className="firstNav mg-t-10">
          <ul className="firstNavUl mg-b-15">
            <li>Place to stay</li>
            <li>Experiences</li>
            <li>Online Experiences</li>
            <li className="blackBox">NEW</li>
          </ul>
        </div>
        <Heading>
          <Title className="title is-1">
            We may be apart, but we’ll get through this together.
          </Title>
        </Heading>
        <HeroCardCarousel>
          <HomeCard />
        </HeroCardCarousel>
      </nav>
      <Body />
    </>
  );
};

export default Home;
