import { useState } from "react"
import { CardsGrid, StyledCards, Togler } from "./styled/Cards.styled"
import { Card } from "../Card/Card";


export const Cards = () => {
  const [toglerMode, setToglerMode] = useState(false)

  return (
    <StyledCards>
      <Togler toglerMode={toglerMode}>
        <span>Public</span>
        <div className="toglerBlock">
          <div
            className="toglerBall"
            onClick={() => setToglerMode(!toglerMode)}
          ></div>
        </div>
        <span>Private</span>
      </Togler>

      <CardsGrid>
        <Card bottomStyle="share-button" topStyle={'none'}/>
        <Card bottomStyle="share-button" topStyle={'none'}/>
        <Card bottomStyle="likes" topStyle={'to'}/>
        <Card bottomStyle="likes" topStyle={'via'}/>
      </CardsGrid>
    </StyledCards>
  );
}