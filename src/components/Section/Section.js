import React from "react";
import styled from "styled-components";

const Informed = styled.section`
  margin-top: 50px;
  background-color: rgb(247, 247, 247);
  padding: 20px;
`;
const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;
const Section = () => {
  return (
    <Informed>
      <p className="title is-4">Destinations for future trips</p>
      <Columns className="columns">
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
      </Columns>
    </Informed>
  );
};

export default Section;
