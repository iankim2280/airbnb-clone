import React from "react";
import styled from "styled-components";
// import { Link } from "@material-ui/core";
import { Star, VerifiedUser, Share, FavoriteBorder } from "@material-ui/icons";
// import { Img } from "react-image";
import DetailCard from "../../components/DetailCard";
import Booking from "../../components/Booking";

const Main = styled.section`
  padding-top: 50px;
  margin: 0 auto;
  width: 80%;
`;
const Nav = styled.nav``;
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`;
const FirstLi = styled.li`
  display: flex;
  justify-content: space-around;
  width: 40%;
`;
const SecondLi = styled.li`
  display: flex;
  justify-content: space-around;
  width: 15%;
`;
const CardCarousel = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  .div1 {
    grid-area: 1 / 1 / 3 / 3;
  }
  .div2 {
    grid-area: 1 / 3 / 2 / 4;
  }
  .div3 {
    grid-area: 1 / 4 / 2 / 4;
  }
  .div4 {
    grid-area: 2 / 3 / 3 /4;
  }
  .div5 {
    grid-area: 2 / 4 / 4 / 4;
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
const Details = () => {
  return (
    <Main>
      <Nav className="pageDetailNav mg-t-50">
        <p class="title is-1">
          Full Studio Suite #3 - The Lake at Blue Mountains
        </p>
        <Ul>
          <FirstLi>
            <span>
              <Star style={{ color: "red", fontSize: "0.9rem" }} />
              4.83(24)
            </span>
            <span>
              <VerifiedUser style={{ color: "red", fontSize: "0.9rem" }} />
              Superhost
            </span>
            <span>The Blue Mountains, Ontario, Canada</span>
          </FirstLi>
          <SecondLi>
            <span>
              <Share />
              Share
            </span>
            <span>
              <FavoriteBorder />
              Save
            </span>
          </SecondLi>
        </Ul>
        <CardCarousel className="cardCarousel mg-tb-15">
          <DetailCard />
        </CardCarousel>
      </Nav>
      <Booking />
    </Main>
  );
};

export default Details;
