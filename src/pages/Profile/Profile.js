import React from "react";
import styled from "styled-components";
import AccountDiv from "../../components/AccountDiv";

const AccountMain = styled.section`
  padding: 20px;
  margin: 0 auto;
  width: 80%;
`;
const Boxes = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Parents = styled.section`
  align-content: center;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  @media only screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }

  @media only screen and (max-width: 750px) {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
`;
const Profile = () => {
  return (
    <AccountMain>
      <Boxes>
        <Parents>
          <AccountDiv />
        </Parents>
      </Boxes>
    </AccountMain>
  );
};

export default Profile;
