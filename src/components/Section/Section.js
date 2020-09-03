import React from "react";
import styled from "styled-components";

const Informed = styled.section`
  margin-top: 50px;
  background-color: rgb(247, 247, 247);
  padding: 20px;
`;
const Header = styled.p`
  width: 80%;
`;
const Columns = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const Column = styled.div`
  padding: 0 10px;
`;
class Section extends React.Component {
  render() {
    const contents = [
      "Ottawa",
      "London",
      "Tokyo",
      "Seoul",
      "Los Angeles",
      "Barrie",
      "Toronto",
      "New York",
    ];
    return (
      <>
        {contents.map((content, index) => (
          <Informed>
            <Header className="title is-4">
              Destinations for future trippers.{" "}
            </Header>
            <Columns className="columns">
              <Column className="column">
                <p className="title is-6">More</p>
              </Column>
              <Column className="column">
                <p className="title is-6">More</p>
              </Column>
              <Column className="column">
                <p className="title is-6">More</p>
              </Column>
              <Column className="column">
                <p className="title is-6">More</p>
              </Column>
            </Columns>
          </Informed>
        ))}
      </>
    );
  }
}

export default Section;
