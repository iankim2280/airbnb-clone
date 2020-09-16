import React from "react";
import styled from "styled-components";
import DetailCard from "../DetailCard";

// const Body = ({ isAuth }) => {
//   const renderData = isAuth ? <div>Authenticated Body</div> : <div>Body</div>;
//   return renderData;
// };

const Container100 = styled.section`
  padding: 0 50px 50px 50px;
  background-color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 650px) {
    padding-bottom: 0;
  }
`;

const ContainerDiv = styled.section`
  width: 100%;
`;

const Header = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  p {
    color: white;
  }

  @media only screen and (max-width: 650px) {
    width: 90%;
    .button {
      display: none;
    }
  }
`;
const Title = styled.div``;
const TitleParagraph = styled.p`
  color: white;
  width: 500px;
`;
const CardCarousel = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  .div1 {
    grid-area: 1 / 1 / 3 / 3;
  }
  .div2 {
    grid-area: 1 / 3 / 2 / 4;
  }
  .div3 {
    grid-area: 1 / 4 / 2 / 5;
  }
  .div4 {
    grid-area: 2 / 3 / 3 / 4;
  }
  .div5 {
    grid-area: 2 / 4 / 3 / 5;
  }

  @media only screen and (max-width: 850px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    .div1 {
      grid-area: 1 / 1 / 3 / 3;
      .card-image .image img {
        border-radius: 0;
        width: 100%;
      }
    }
    .div2,
    .div3,
    .div4,
    .div5 {
      display: none;
    }
  }
`;

const Body = () => {
  return (
    <Container100 class="mg-t-50">
      <ContainerDiv class="mg-t-50">
        <Header>
          <p class="title">Introducing Online Experiences</p>
          <button class="button">Explore All</button>
        </Header>
        <Title class="containerParagraph">
          <TitleParagraph>
            Now you can meet people all over the world while trying something
            new. Join live, interactive video sessions led by expert hosts—all
            without leaving home.
          </TitleParagraph>
        </Title>
        <CardCarousel class="cardCarousel mg-tb-15">
          <DetailCard />
        </CardCarousel>
      </ContainerDiv>
    </Container100>
  );
};
export default Body;
