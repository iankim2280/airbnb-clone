import React from "react";
import { Img } from "react-image";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
const CardContent = styled.div`
  box-sizing: border-box;
`;
const Figure = styled.figure`
  margin-bottom: 0;
`;
class ContentsCard extends React.Component {
  render() {
    const contents = [];
    for (let i = 1; i < 6; i++) {
      contents.push({
        class: `card div${i} noBorder`,
      });
    }
    return (
      <>
        {contents.map((content, index) => (
          <Container className={content.class}>
            <CardContent className="card-image">
              <Figure className="image">
                <Img src="https://picsum.photos/seed/picsum/600/400" />
              </Figure>
            </CardContent>
          </Container>
        ))}
      </>
    );
  }
}
export default ContentsCard;
