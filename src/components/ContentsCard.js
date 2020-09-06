import React from "react";
import { Img } from "react-image";
import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "@material-ui/core";

const Container = styled.div`
  width: 90%;
`;
const CardContent = styled.div`
  padding: 5px;
`;
const Figure = styled.figure`
  margin-bottom: 0;
`;
const Rating = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  margin-bottom: 0;
`;
const Paragraph = styled.p`
  margin-bottom: 0;
  font-size: 0.7rem;
`;
class ContentsCard extends React.Component {
  render() {
    const contents = [];
    for (let i = 1; i < 21; i++) {
      contents.push({
        class: `card card${i}`,
        rating: Math.floor(Math.random() * 6),
      });
    }
    return (
      <>
        {contents.map((content, index) => (
          <Container key={content.class} className={content.class}>
            <Link
              href="/details"
              style={{ color: "black" }}
              activestyle={{ color: "black" }}
            >
              <div class="card-image">
                <Figure class="image is-4by3">
                  <Img
                    className="roundBorder"
                    src="https://picsum.photos/seed/picsum/600/400"
                  />
                </Figure>
              </div>
              <CardContent class="card-content">
                <div class="media">
                  <div class="media-content">
                    <Rating class="rating">
                      <li>Entire cottage·3 beds</li>
                      <li>
                        <StarIcon
                          style={{ color: "red", fontSize: "0.9rem" }}
                        />
                        {content.rating}
                      </li>
                    </Rating>
                    <Paragraph class="subtitle is-6">
                      Summer cottage on the shore
                    </Paragraph>
                    <Paragraph class="subtitle is-6">
                      <b>$116 CAD</b>/night
                    </Paragraph>
                    <Paragraph class="subtitle is-6">$580 CAD total</Paragraph>
                  </div>
                </div>
              </CardContent>
            </Link>
          </Container>
        ))}
      </>
    );
  }
}
export default ContentsCard;
