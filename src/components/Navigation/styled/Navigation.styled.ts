import styled from "styled-components";

export const StyledNavigation = styled.nav`
  display: flex;
  gap: 36px;
  margin-top: 23px;
  min-width: 261px;

  a {
    text-decoration: none;
    color: #3E4056;
    opacity: 0.6;
    text-transform: uppercase;
    position: relative;
    line-height: 42px;
    box-sizing: border-box;
    transition: opacity 0.5s ease;

    &.active {
      opacity: 1;
    }

    &::after {
      content: "";
      height: 4px;
      width: 100%;
      background: linear-gradient(90deg, #ff974f 0%, #e32c75 100%);
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
      opacity: 0;
      transition: opacity 0.6s ease, width 0.6s ease;
    }

    &.active::after {
      opacity: 1;
    }
  }
`;