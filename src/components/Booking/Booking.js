import React from "react";
// import { Link } from "@material-ui/core";
import styled from "styled-components";
import {
  Star,
  Home,
  MeetingRoom,
  LocalLaundryService,
  CalendarToday,
} from "@material-ui/icons";
const BookingMain = styled.section`
  padding-top: 50px;
  border-top: 0.1px solid lightgrey;
`;
const OrderList1 = styled.ul`
  display: flex;
  justify-content: space-around;
`;
const BookingTabFirstList = styled.li`
  width: 65%;
  @media only screen and (max-width: 850px) {
    width: 65%;
  }
`;
const BookingTabSecondList = styled.li`
  width: 35%;
  @media only screen and (max-width: 850px) {
    display: none;
  }
`;
const BookingInfo = styled.div``;
const HomeInfoList = styled.ul`
  display: flex;
  flex-direction: column;
`;
const HomeInfoListItems = styled.li`
  font-size: 0.8rem;
`;

const BookingTitle = styled.div``;
const Header = styled.div``;

const BookingTab = styled.div`
  width: 80%;
  margin: 0 auto;
  position: sticky;
  top: 100px;
  border: 0.1px solid lightgrey;
  border-radius: 10px;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.1);
`;
const BookingTabTitle = styled.ul`
  padding-top: 15px;
  display: flex;
  justify-content: space-around;
`;
const BookingTabList = styled.li`
  display: flex;
  justify-content: center;
  width: 50%;
`;
const BookingGrid = styled.div`
  border: 0.1px solid lightgrey;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  .div1 {
    border-right: 0.1px solid lightgrey;
    grid-area: 1 / 1 / 2 / 2;
  }
  .div2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .div3 {
    border-top: 0.1px solid lightgrey;
    grid-area: 2 / 1 / 3 / 3;
  }
`;
const BookingDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    margin-bottom: 0;
    padding: 4px;
    font-size: 0.7rem;
  }
`;
const BookingPrice = styled.div`
  width: 90%;
  margin: 0 auto;
  .columns {
    padding: 5px;
    border-bottom: 0.1px solid lightgrey;

    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    .column:first-child {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      p {
        margin-bottom: 8px;
      }
    }
    .column:last-child {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      p {
        margin-bottom: 8px;
      }
    }
  }
`;
const BookingTotal = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-bottom: 0;
  }
`;
const Booking = () => {
  return (
    <BookingMain className="">
      <OrderList1 className="bookingList">
        <BookingTabFirstList className="bookingTabFirstList">
          <BookingInfo>
            <BookingTitle className="pd-b-20 border-b-lg">
              <Header>
                <p className="title is-4">
                  Entire apartment hosted by The Lake At Blue Mountains
                </p>
                <p>4 guests · 1 bedroom · 1 bed · 1 bath</p>
              </Header>
            </BookingTitle>
            <BookingInfo className="homeInfo pd-t-25 pd-b-20 border-b-lg">
              <ul className="homeInfoList">
                <li className="homeInfoListItems">
                  <Home />
                  <HomeInfoList>
                    <HomeInfoListItems>
                      <b>Entire home</b>
                    </HomeInfoListItems>
                    <HomeInfoListItems>
                      <p>You’ll have the apartment to yourself.</p>
                    </HomeInfoListItems>
                  </HomeInfoList>
                </li>
                <li className="homeInfoListItems">
                  <MeetingRoom />
                  <HomeInfoList>
                    <HomeInfoListItems>
                      <b>Self check-in</b>
                    </HomeInfoListItems>
                    <HomeInfoListItems>
                      <p>You can check in with the doorman.</p>
                    </HomeInfoListItems>
                  </HomeInfoList>
                </li>
                <li className="homeInfoListItems">
                  <LocalLaundryService />
                  <HomeInfoList>
                    <HomeInfoListItems>
                      <b>Clean and tidy</b>
                    </HomeInfoListItems>
                    <HomeInfoListItems>
                      <p>
                        13 recent guests said this place was sparkling clean.
                      </p>
                    </HomeInfoListItems>
                  </HomeInfoList>
                </li>
                <li className="homeInfoListItems">
                  <CalendarToday />
                  <HomeInfoList>
                    <HomeInfoListItems>
                      <b>Cancellation policy</b>
                    </HomeInfoListItems>
                    <HomeInfoListItems>
                      <p>
                        Cancel before 4:00 PM on Jun. 17 and get a 50% refund,
                        minus the service fee.
                      </p>
                    </HomeInfoListItems>
                  </HomeInfoList>
                </li>
              </ul>
            </BookingInfo>
            <div className="contactHost pd-t-25 pd-b-20 border-b-lg">
              <div>
                <p>
                  Experience The Comforts of Home While You're Away & we are pet
                  friendly!
                </p>
                <p>
                  All rental check-ins are “non contact/digital” and every suite
                  has it’s own heating and cooling system (no shared air)! All…
                  <b>read more</b>
                </p>
                <p>
                  <b>Contact host</b>
                </p>
              </div>
            </div>
            <div className="arrangements pd-t-25 pd-b-20 border-b-lg">
              <p className="title is-4">Sleeping arrangements</p>
              <ul className="arrangementsContents">
                <li>
                  <div className="shadowBox">
                    <i className="fa fa-bed" aria-hidden="true"></i>
                    <p className="title is-6">Bedroom 1</p>
                    <p>1 queen bed</p>
                  </div>
                </li>
                <li>
                  <div className="shadowBox">
                    <i className="fa fa-bed" aria-hidden="true"></i>
                    <p className="title is-6">Common spaces</p>
                    <p>1 sofa bed</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="amenities pd-t-25 pd-b-20 border-b-lg">
              <p className="title is-4">Amenities</p>
              <div className="columns">
                <div className="column">
                  <p className="mg-tb-10">
                    <i className="fa fa-wifi" aria-hidden="true"></i> Wifi
                  </p>
                  <p className="mg-tb-10">
                    <i className="fas fa-parking"></i> Free parking on premises
                  </p>
                  <p className="mg-tb-10">
                    <i className="fa fa-cube" aria-hidden="true"></i> Iron
                  </p>
                  <p className="mg-tb-10">
                    <i className="fa fa-laptop" aria-hidden="true"></i>
                    Laptop-friendly workspace
                  </p>
                  <p className="mg-tb-10">
                    <i
                      className="fa fa-thermometer-empty"
                      aria-hidden="true"
                    ></i>
                    Heating
                  </p>
                </div>
                <div className="column">
                  <p className="mg-tb-10">
                    <i className="fa fa-cutlery" aria-hidden="true"></i> Kitchen
                  </p>
                  <p className="mg-tb-10">
                    <i className="fa fa-battery-full" aria-hidden="true"></i>
                    Cable TV
                  </p>
                  <p className="mg-tb-10">
                    <i className="fa fa-shower" aria-hidden="true"></i> Hair
                    dryer
                  </p>
                  <p className="mg-tb-10">
                    <i className="fas fa-tv"></i> Tv
                  </p>
                  <p className="mg-tb-10">
                    <i className="fa fa-object-group" aria-hidden="true"></i>
                    Indoor fireplace
                  </p>
                </div>
              </div>
              <button className="button">Explore All</button>
            </div>
          </BookingInfo>
        </BookingTabFirstList>
        <BookingTabSecondList>
          <BookingTab className=" shadowBox">
            <BookingTabTitle className="pd-t-15">
              <BookingTabList>
                <p className="is-5">
                  <b className="title is-5">$129</b>/night
                </p>
              </BookingTabList>
              <BookingTabList>
                <Star />
                4.93(121)
              </BookingTabList>
            </BookingTabTitle>
            <BookingGrid className="bookingGrid shadowBox mg-15">
              <BookingDiv className="div1">
                <p>CHECK-IN</p>
                <p>2020-06-24</p>
              </BookingDiv>
              <BookingDiv className="div2">
                <p>CHECKOUT</p>
                <p>2020-06-26</p>
              </BookingDiv>
              <BookingDiv className="div3">
                <p>GUESTS</p>
                <p>1 guest</p>
              </BookingDiv>
            </BookingGrid>
            <BookingPrice className="bookingPrice">
              <div className="columns">
                <div className="column">
                  <p>$129 X 2 nights</p>
                  <p>Cleaning fee</p>
                  <p>Service fee</p>
                </div>
                <div className="column">
                  <p>$258</p>
                  <p>$79</p>
                  <p>$48</p>
                </div>
              </div>
            </BookingPrice>
            <BookingTotal className="total">
              <div className="columns">
                <div className="column">
                  <p>
                    <b>Total</b>
                  </p>
                </div>
                <div className="column">
                  <p>
                    <b>$385</b>
                  </p>
                </div>
              </div>
              <button className="button is-danger">Reserve</button>
              <p>You won't be charged yet</p>
            </BookingTotal>
          </BookingTab>
        </BookingTabSecondList>
      </OrderList1>
    </BookingMain>
  );
};

export default Booking;
