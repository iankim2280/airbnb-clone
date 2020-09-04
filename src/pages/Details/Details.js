import React from "react";
import styled from "styled-components";

const Main = styled.section`
  padding-top: 50px;
  margin: 0 auto;
  width: 80%;
`;
const Details = () => {
  return (
    <Main>
      <nav className="pageDetailNav mg-t-50">
        <p className="title">
          Full Studio Suite #3 - The Lake at Blue Mountains
        </p>
        <ul>
          <li>
            <span>
              <i className="fa fa-star" aria-hidden="true"></i>4.83(24)
            </span>
            <span>
              <i className="fa fa-certificate" aria-hidden="true"></i>Superhost
            </span>
            <span>The Blue Mountains, Ontario, Canada</span>
          </li>
          <li>
            <span>
              <i className="fa fa-share-square-o" aria-hidden="true"></i>
              Share
            </span>
            <span>
              <i className="fa fa-heart-o" aria-hidden="true"></i> Save
            </span>
          </li>
        </ul>
        <div className="cardCarousel mg-tb-15">
          <div className="card pd-10 div1">
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src="https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
          </div>
          <div className="card pd-10 div2">
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src="https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
          </div>
          <div className="card pd-10 div3">
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src="https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
          </div>
          <div className="card pd-10 div4">
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src="https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
          </div>
          <div className="card pd-10 div5">
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src="https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
          </div>
        </div>
      </nav>
      <section className="mg-t-50 bookingDetail">
        <ul className="bookingList">
          <li className="bookingTabFirstList">
            <div className="homeInfoSection">
              <div className="bookingTitle pd-t-25 pd-b-20 border-b-lg">
                <p className="title is-4">
                  Entire apartment hosted by The Lake At Blue Mountains
                </p>
                <p>4 guests · 1 bedroom · 1 bed · 1 bath</p>
              </div>
              <div className="homeInfo pd-t-25 pd-b-20 border-b-lg">
                <ul className="homeInfoList">
                  <li className="homeInfoListItems">
                    <i className="fa fa-home" aria-hidden="true"></i>
                    <ul>
                      <li>
                        <b>Entire home</b>
                      </li>
                      <li>
                        <p>You’ll have the apartment to yourself.</p>
                      </li>
                    </ul>
                  </li>
                  <li className="homeInfoListItems">
                    <i className="fa fa-unlock" aria-hidden="true"></i>
                    <ul>
                      <li>
                        <b>Self check-in</b>
                      </li>
                      <li>
                        <p>You can check in with the doorman.</p>
                      </li>
                    </ul>
                  </li>
                  <li className="homeInfoListItems">
                    <i className="fa fa-spray-can"></i>
                    <ul>
                      <li>
                        <b>Clean and tidy</b>
                      </li>
                      <li>
                        <p>
                          13 recent guests said this place was sparkling clean.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li className="homeInfoListItems">
                    <i className="fa fa-address-book" aria-hidden="true"></i>
                    <ul>
                      <li>
                        <b>Cancellation policy</b>
                      </li>
                      <li>
                        <p>
                          Cancel before 4:00 PM on Jun. 17 and get a 50% refund,
                          minus the service fee.
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="contactHost pd-t-25 pd-b-20 border-b-lg">
                <div>
                  <p>
                    Experience The Comforts of Home While You're Away & we are
                    pet friendly!
                  </p>
                  <p>
                    All rental check-ins are “non contact/digital” and every
                    suite has it’s own heating and cooling system (no shared
                    air)! All…
                    <a href="" className="anchorButton">
                      <b>read more</b>
                    </a>
                  </p>
                  <p>
                    <a href="" className="anchorButton">
                      <b>Contact host</b>
                    </a>
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
                      <i className="fas fa-parking"></i> Free parking on
                      premises
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
                      <i className="fa fa-cutlery" aria-hidden="true"></i>{" "}
                      Kitchen
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
              <div className="calendar"></div>
            </div>
          </li>
          <li className="bookingTabSecondList">
            <div className="bookingTab shadowBox">
              <ul className="pd-t-15">
                <li>
                  <p className="is-5">
                    <b className="title is-5">$129</b>/night
                  </p>
                </li>
                <li>
                  <i className="fa fa-star" aria-hidden="true"></i>4.93(121)
                </li>
              </ul>
              <div className="bookingGrid shadowBox mg-15">
                <div className="div1">
                  <p>CHECK-IN</p>
                  <p>2020-06-24</p>
                </div>
                <div className="div2">
                  <p>CHECKOUT</p>
                  <p>2020-06-26</p>
                </div>
                <div className="div3">
                  <p>GUESTS</p>
                  <p>1 guest</p>
                </div>
              </div>
              <div className="bookingPrice">
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
              </div>
              <div className="total">
                <ul>
                  <li>
                    <p>
                      <b>Total</b>
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>$385</b>
                    </p>
                  </li>
                </ul>
                <button className="button is-danger">Reserve</button>
                <p>You won't be charged yet</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </Main>
  );
};

export default Details;
