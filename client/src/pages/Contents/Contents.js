import React from "react";
import styled from "styled-components";
import ContentsButton from "../../components/ContentsButton";
import { Link } from "@material-ui/core";
import ContentsCard from "../../components/ContentsCard";

const Main = styled.section`
  padding-top: 50px;
  margin: 0 auto;
  width: 80%;
`;
const Stays = styled.p`
  font-weight: normal;
`;
const TravelInfo = styled.p`
  width: 90%;
  font-size: 0.8rem;
  margin: 15px 0;
`;
const ContentsCardsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  .card1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .card2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .card3 {
    grid-area: 1 / 3 / 2 / 4;
  }
  .card4 {
    grid-area: 1 / 4 / 2 / 5;
  }
  .card5 {
    grid-area: 1 / 5 / 2 / 6;
  }
  .card6 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .card7 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .card8 {
    grid-area: 2 / 3 / 3 / 4;
  }
  .card9 {
    grid-area: 2 / 4 / 3 / 5;
  }
  .card10 {
    grid-area: 2 / 5 / 3 / 6;
  }
  .card11 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .card12 {
    grid-area: 3 / 2 / 4 / 3;
  }
  .card13 {
    grid-area: 3 / 3 / 4 / 4;
  }
  .card14 {
    grid-area: 3 / 4 / 4 / 5;
  }
  .card15 {
    grid-area: 3 / 5 / 4 / 6;
  }
  .card16 {
    grid-area: 4 / 1 / 5 / 2;
  }
  .card17 {
    grid-area: 4 / 2 / 5 / 3;
  }
  .card18 {
    grid-area: 4 / 3 / 5 / 4;
  }
  .card19 {
    grid-area: 4 / 4 / 5 / 5;
  }
  .card20 {
    grid-area: 4 / 5 / 5 / 6;
  }

  @media only screen and (max-width: 1000px) {
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 20px;
    .card1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    .card2 {
      grid-area: 1 / 2 / 2 / 3;
    }
    .card3 {
      grid-area: 1 / 3 / 2 / 4;
    }
    .card4 {
      grid-area: 2 / 1 / 3 / 2;
    }
    .card5 {
      grid-area: 2 / 2 / 3 / 3;
    }
    .card6 {
      grid-area: 2 / 3 / 3 / 4;
    }
    .card7 {
      grid-area: 3 / 1 / 4 / 2;
    }
    .card8 {
      grid-area: 3 / 2 / 4 / 3;
    }
    .card9 {
      grid-area: 3 / 3 / 4 / 4;
    }
    .card10 {
      grid-area: 4 / 1 / 5 / 2;
    }
    .card11 {
      grid-area: 4 / 2 / 5 / 3;
    }
    .card12 {
      grid-area: 4 / 3 / 5 / 4;
    }
    .card13 {
      grid-area: 5 / 1 / 6 / 2;
    }
    .card14 {
      grid-area: 5 / 2 / 6 / 3;
    }
    .card15 {
      grid-area: 5 / 3 / 6 / 4;
    }
    .card16 {
      grid-area: 6 / 1 / 7 / 2;
    }
    .card17 {
      grid-area: 6 / 2 / 7 / 3;
    }
    .card18 {
      grid-area: 6 / 3 / 7 / 4;
    }
    .card19,
    .card20 {
      display: none;
    }
  }

  @media only screen and (max-width: 550px) {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    .card {
      margin-bottom: 16px;
    }
    .card1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    .card2 {
      grid-area: 2 / 1 / 3 / 2;
    }
    .card3 {
      grid-area: 3 / 1 / 4 / 2;
    }
    .card4 {
      grid-area: 4 / 1 / 5 / 2;
    }
    .card5 {
      grid-area: 5 / 1 / 6 / 2;
    }
    .card6 {
      grid-area: 6 / 1 / 7 / 2;
    }
    .card7 {
      grid-area: 7 / 1 / 8 / 2;
    }
    .card8 {
      grid-area: 8 / 1 / 9 / 2;
    }
    .card9 {
      grid-area: 9 / 1 / 10 / 2;
    }
    .card10 {
      grid-area: 10 / 1 / 11 / 2;
    }
    .card11,
    .card12,
    .card13,
    .card14,
    .card15,
    .card16,
    .card17,
    .card18,
    .card19,
    .card20 {
      display: none;
    }
  }
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
      <TravelInfo class="mg-tb-15">
        <b>Check travel restrictions before booking.</b> The health and safety
        of our communities come first. TravelInfolease follow government
        guidelines and travel only if it's essential.
        <Link href="" class="anchorButton">
          Learn more
        </Link>
      </TravelInfo>
      <ContentsCardsSection>
        <ContentsCard />
      </ContentsCardsSection>
    </Main>
  );
};

export default Contents;
