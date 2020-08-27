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
  p:nth-child(3) {
    font-size: 0.9rem;
  }
`;
class AccountDiv extends React.Component {
  render() {
    return (
      <AccountCardSection class="pd-15">
        <Link href="/profile" variant="body2">
          <i class="fa fa-code" aria-hidden="true"></i>
          <p class="title is-5">hello world</p>
          <p>some infos</p>
        </Link>
      </AccountCardSection>
    );
  }
}
export default AccountDiv;
