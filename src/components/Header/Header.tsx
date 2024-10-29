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
import { BellIcon } from "../Icons/bell";
import { SharedRecapIcon } from "../Icons/shared";
import { MediumIcon } from "../Icons/medium";
import { ArrowDown } from "../Icons/arrow";
import { LogoIcon } from "../Icons/logo";
import avatar from '../../assets/avatar.png';

export const Header = () => {
  const [activeNav, setActiveNav] = useState<string>("feed");
  return (
    <StyledHeader>
      <div style={{ marginTop: "24px" }}>
        <Logo>
          <LogoIcon />
        </Logo>

        <Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
      </div>

      <UserControlPanel>
        <span>Arthur Wood</span>
        <img src={avatar} alt="User Avatar" />
        <UserPanelButton width="16px" height="16px">
          <ArrowDown />
        </UserPanelButton>
        <UserPanelButtonsBlock>
          <UserPanelButton>
            <BellIcon />
          </UserPanelButton>

          <UserPanelButton>
            <SharedRecapIcon />
          </UserPanelButton>

          <UserPanelButton>
            <MediumIcon />
          </UserPanelButton>
        </UserPanelButtonsBlock>
      </UserControlPanel>
      <FloatingButton>+</FloatingButton>
    </StyledHeader>
  );
};
