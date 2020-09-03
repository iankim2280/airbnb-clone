import React from "react";
import { Img } from "react-image";
import styled from "styled-components";
import { Link } from "@material-ui/core";

const Container = styled.div`
  width: 100%;
`;

class HomeCard extends React.Component {
  render() {
    const contents = [];
    for (let i = 1; i < 4; i++) {
      contents.push({ class: `card${i}` });
    }
    return (
      <>
        {contents.map((content, index) => (
          <Container key={content.class} className={content.class}>
            <Link
              href="/contents"
              style={{ color: "black" }}
              activeStyle={{ color: "black" }}
            >
              <div className="card-image shadowBox">
                <figure className="image is-4by3">
                  <Img src="https://picsum.photos/seed/picsum/600/400" />
                  <div className="text-block pd-10">
                    <p>Hello world</p>
                    <p>
                      Unique activities we can do together, led by a world of
                      hosts.
                    </p>
                  </div>
                </figure>
              </div>
            </Link>
          </Container>
        ))}
      </>
    );
  }
}
export default HomeCard;
