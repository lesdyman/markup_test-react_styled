import { useState } from "react";
import {
  FloatingButton,
  Logo,
  StyledHeader,
  UserControlPanel,
  UserPanelButton,
  UserPanelButtonsBlock,
} from "./styled/Header.styled";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  const [activeNav, setActiveNav] = useState<string>("feed");
  return (
    <StyledHeader>
      <div style={{ marginTop: "24px" }}>
        <Logo>
          <img src="src/assets/logo.svg" alt="logo" />
        </Logo>

        <Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
      </div>

      <UserControlPanel>
        <span>Arthur Wood</span>
        <img src="src/assets/avatar.png" alt="User Avatar" />
        <UserPanelButton
          width="16px"
          height="16px"
          imagePath="src/assets/a_icon_arrow.svg"
        />
        <UserPanelButtonsBlock>
          <UserPanelButton imagePath="/src/assets/notifications.svg" />
          <UserPanelButton imagePath="src/assets/share-recap.svg" />
          <UserPanelButton imagePath="src/assets/medium.svg" />
        </UserPanelButtonsBlock>
      </UserControlPanel>
      <FloatingButton>+</FloatingButton>
    </StyledHeader>
  );
};
