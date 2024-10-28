import styled from "styled-components";

export const StyledCards = styled.div`
  height: fit-content;
  width: fit-content;
`;

interface ToglerProps {
  toglerMode: boolean;
}

export const Togler = styled.div<ToglerProps>`
  display: flex;
  gap: 30px;

  .toglerBlock {
    position: relative;
    width: 40px;
    height: 24px;
    background-color: #ed5267;
    border-radius: 24px;
  }

  .toglerBall {
    position: absolute;
    top: 3px;
    left: 3px;
    height: 18px;
    width: 18px;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.3s ease;
    transform: ${(props) =>
      props.toglerMode ? "translateX(16px)" : "translateX(0)"};
  }

  span {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 62px;
  gap: 24px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;
  }

  @media (min-width: 480px) and (max-width: 1024px) {
    gap: 12px;
  }
`;
