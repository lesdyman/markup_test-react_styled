import { GlobalStyles } from "./components/Global.styled";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main />
    </>
  );
};
