import React from "react";
import styled from "styled-components";
import { Link } from "@material-ui/core";

const AccountCardSection = styled.section`
  padding: 20px;
  width: 320px;
  height: 180px;
  font-size: 2rem;
  background-color: white;

  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.1);
  p:nth-child(2) {
    font-size: 0.9rem;
  }
`;
class AccountDiv extends React.Component {
  render() {
    const contents = [];
    for (let i = 1; i < 10; i++) {
      contents.push({ class: `accountDiv${i}` });
    }
    return (
      <>
        {contents.map((content, index) => (
          <AccountCardSection key={index} className={content.class}>
            <Link
              href="/profile"
              style={{ color: "black" }}
              activestyle={{ color: "black" }}
            >
              <p className="title is-5">Profile Card</p>
              <p>Edit Your Infos</p>
            </Link>
          </AccountCardSection>
        ))}
      </>
    );
  }
}
export default AccountDiv;
