import React from "react";
import styled from "styled-components";

const Informed = styled.section`
  margin-top: 50px;
  background-color: rgb(247, 247, 247);
  padding: 20px;
`;

const Section = () => {
  return (
    <Informed>
      <p className="title is-4">Destinations for future trips</p>
      <div className="columns">
        <div className="column">
          <p className="title is-6">More</p>
          <p className="mg-tb-10">San Francisco</p>
          <p className="mg-tb-10">Denver</p>
          <p className="mg-tb-10">Houston</p>
        </div>
        <div className="column">
          <p className="title is-6">More</p>
          <p className="mg-tb-10">Los Angeles</p>
          <p className="mg-tb-10">Washington DC</p>
          <p className="mg-tb-10">New Orleans</p>
        </div>
        <div className="column">
          <p className="title is-6">More</p>
          <p className="mg-tb-10">New York</p>
          <p className="mg-tb-10">Phoenix</p>
          <p className="mg-tb-10">Boston</p>
          <p className="mg-tb-10">Phoenix</p>
          <p className="mg-tb-10">Boston</p>
          <p className="mg-tb-10">Boston</p>
        </div>
        <div className="column">
          <p className="title is-6">More</p>
          <p className="mg-tb-10">Seatle</p>
        </div>
      </div>
    </Informed>
  );
};

export default Section;
