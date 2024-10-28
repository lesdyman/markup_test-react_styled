import { Cards } from "../Cards/Cards";
import { Info } from "../Info/Info";
import { StyledMain } from "./styled/Main.styled";

export const Main = () => {
  return (
    <StyledMain>
      <Info />
      <Cards />
    </StyledMain>
  );
};
