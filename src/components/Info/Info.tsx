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
import { DotsIcon } from "../Icons/3dots";
import infoAvatar from "../../assets/infoAvatar.png";
import { EditIcon } from "../Icons/edit";
import { ReportIcon } from "../Icons/report";
import { BlockIcon } from "../Icons/block";

export const Info = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <StyledInfo>
      <InfoTop>
        <InfoAvatar imagePath={infoAvatar} />
        <InfoTopText>
          <span className="title">Benjamin Clementine</span>
          <span className="alias">@benclementine</span>
          <EditButton>
            <EditIcon />
            <a href="#">Edit Profile</a>
          </EditButton>
        </InfoTopText>
        <DottedMenu onClick={() => setMenuIsOpen(!menuIsOpen)}>
          <DotsIcon />
        </DottedMenu>
        {menuIsOpen && (
          <ContextMenu isVisible={menuIsOpen}>
            <ContextMenuLine>
              <div className="context_menu-icon">
                <ReportIcon />
              </div>
              <span>Report User</span>
            </ContextMenuLine>

            <ContextMenuLine>
              <div className="context_menu-icon">
                <BlockIcon />
              </div>
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
