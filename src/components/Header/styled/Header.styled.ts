import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  position: relative;
  padding: 0 130px;
  justify-content: space-between;
  background-color: #fff;
  width: 100vw;
  box-shadow: 0px 12px 12px 0px rgba(0, 0, 0, 0.06);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 80px;
  }
`;

export const Logo = styled.div`
  img {
    height: 23px;
    width: 50px;
  }
`;

export const UserControlPanel = styled.div`
  display: flex;
  margin: 21px 0 59px 0;
  align-items: center;
  min-width: 290px;

  span {
    font-size: 16px;
    line-height: 20px;
    color: #3e3f58;
  }

  img {
    height: 32px;
    width: 32px;
    border-radius: 32px;
    margin: 0 12px 0 20px;
  }
`;

export const UserPanelButtonsBlock = styled.div`
  display: flex;
  margin-left: 17px;
`;

interface UserPanelButtonProps {
  width?: string;
  height?: string;
}

export const UserPanelButton = styled.button<UserPanelButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  height: ${(props) => props.height || "32px"};
  width: ${(props) => props.width || "32px"};
  background-color: #fff;
  cursor: pointer;
`;

export const FloatingButton = styled.div`
  position: absolute;
  right: 135px;
  bottom: -32px;
  background: linear-gradient(135deg, #ff974f 0%, #e32c75 100%);
  height: 64px;
  width: 64px;
  border-radius: 50%;
  font-size: 20px;
  text-align: center;
  line-height: 64px;
  color: #fff;
  cursor: pointer;
`;
