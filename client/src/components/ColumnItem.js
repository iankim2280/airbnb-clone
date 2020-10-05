import React from "react";
import styled from "styled-components";

const CenterDiv = styled.div`
  margin: 0 auto;
  text-align: center;
`;
const ColumnItem = () => {
  const contents = [
    { name: "Ottawa" },
    { name: "London" },
    { name: "Tokyo" },
    { name: "Seoul" },
    { name: "Los Angeles" },
    { name: "Ottawa" },
    { name: "Barrie" },
    { name: "Toronto" },
    { name: "New York" },
  ];
  return (
    <CenterDiv>
      <p className="pTitle mg-tb-10">More</p>
      {contents.map((content, index) => (
        <p className="mg-tb-10" key={index}>
          {content.name}
        </p>
      ))}
    </CenterDiv>
  );
};
export default ColumnItem;
