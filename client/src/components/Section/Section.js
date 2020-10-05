import React from "react";
import styled from "styled-components";
import Column from "../Column";

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
const Informed = styled.section`
  margin-top: 50px;
  background-color: rgb(247, 247, 247);
  padding: 20px;
`;
const Header = styled.p`
  margin-bottom: 0;
`;
const Columns = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  .column1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .column2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .column3 {
    grid-area: 1 / 3 / 2 / 4;
  }
  .column4 {
    grid-area: 1 / 4 / 2 / 5;
  }

  @media only screen and (max-width: 850px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    .column1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    .column2 {
      grid-area: 1 / 2 / 2 / 3;
    }
    .column3 {
      grid-area: 2 / 1 / 3 / 2;
    }
    .column4 {
      grid-area: 2 / 2 / 3 / 3;
    }
  }
  @media only screen and (max-width: 450px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    .column1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    .column2 {
      grid-area: 2 / 1 / 3 / 2;
    }
    .column3 {
      grid-area: 3 / 1 / 4 / 2;
    }
    .column4 {
      grid-area: 4 / 1 / 5 / 2;
    }
  }
`;
class Section extends React.Component {
  state = {
    contents: [],
  };
  componentDidMount() {
    this.setState({
      contents,
    });
  }
  render() {
    // const { contents } = this.state;
    return (
      <>
        <Informed>
          <Header className="title is-4">
            Destinations for future trippers.{" "}
          </Header>
          <Columns className="columns">
            <Column />
          </Columns>
        </Informed>
      </>
    );
  }
}

export default Section;
