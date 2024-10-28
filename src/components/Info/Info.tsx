import { useState } from "react";
import {
  DottedMenu,
  EditButton,
  FollowersStat,
  InfoAvatar,
  InfoTop,
  InfoTopText,
  StatItem,
  StyledInfo,
  TextBlock,
  ContextMenu,
  ContextMenuLine,
} from "./styled/Info.styled";

export const Info = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <StyledInfo>
      <InfoTop>
        <InfoAvatar imagePath="src/assets/infoAvatar.png" />
        <InfoTopText>
          <span className="title">Benjamin Clementine</span>
          <span className="alias">@benclementine</span>
          <EditButton>
            <img src="src/assets/edit_icon.svg" alt="Edit icon" />
            <a href="#">Edit Profile</a>
          </EditButton>
        </InfoTopText>
        <DottedMenu onClick={() => setMenuIsOpen(!menuIsOpen)}>
          <img src="src/assets/icon_3_dots_menu.svg" alt="more menu" />
        </DottedMenu>
        {menuIsOpen && (
          <ContextMenu isVisible={menuIsOpen}>
            <ContextMenuLine>
              <img src="/src/assets/icon_report.svg" alt="Report User icon" />
              <span>Report User</span>
            </ContextMenuLine>

            <ContextMenuLine>
              <img src="/src/assets/icon_block.svg" alt="Block User icon" />
              <span>Block User</span>
            </ContextMenuLine>
          </ContextMenu>
        )}
      </InfoTop>

      <FollowersStat>
        <StatItem>
          <div>45</div>
          <span>synths</span>
        </StatItem>
        <StatItem>
          <div>110</div>
          <span>followers</span>
        </StatItem>
        <StatItem>
          <div>322</div>
          <span>following</span>
        </StatItem>
      </FollowersStat>
      <TextBlock>
        <span>
          Cryptocurrencies including Ethereum, Ripple, and Litecoin have all
          plunged between 20 to 30 percent each, according to CoinMarketCap.
          Here is the latest Ripple price news and live updates on XRP, bitcoin
          and Ethereum.
        </span>
      </TextBlock>
    </StyledInfo>
  );
};
