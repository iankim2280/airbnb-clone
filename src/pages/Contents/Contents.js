import React from "react";
import styled from "styled-components";
import ContentsButton from "../../components/ContentsButton";

const Main = styled.section`
  padding-top: 50px;
  margin: 0 auto;
  width: 80%;
`;
const Stays = styled.p`
  font-weight: normal;
`;
const Contents = () => {
  return (
    <Main>
      <Stays class="title is-6 stays">225 stays</Stays>
      <p class="title">Stays in Barrie</p>
      <ul>
        <li>
          <ContentsButton />
        </li>
      </ul>
      <p class="warning mg-tb-15">
        <b>Check travel restrictions before booking.</b> The health and safety
        of our communities come first. Please follow government guidelines and
        travel only if it's essential.
        <a href="" class="anchorButton">
          Learn more
        </a>
      </p>
    </Main>
  );
};

export default Contents;
