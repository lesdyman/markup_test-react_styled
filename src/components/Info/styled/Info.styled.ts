import styled from "styled-components";

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  position: relative;
`;

export const InfoTop = styled.div`
  display: flex;
  width: fit-content;
  gap: 25px;
  margin-bottom: 8px;
`;

interface InfoAvatarProps {
  imagePath: string;
}

export const InfoAvatar = styled.div<InfoAvatarProps>`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  background-image: url(${(props) => props.imagePath});
`;

export const InfoTopText = styled.div`
  display: flex;
  flex-direction: column;
  width: 145px;
  color: #3E3F58;
  font-size: 16px;
  line-height: 20px;

  .title {
    font-size: 24px;
    line-height: 26px;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
  }

  .alias {
    margin: 8px 0;
  }
`;

export const EditButton = styled.div`
  display: flex;
  color: #f05d63;
  gap: 8px;
  align-items: center;
  margin-top: 8px;

  img {
    height: 20px;
    width: 20px;
  }

  a {
    color: #f05d63;
    margin: 8px 0;
  }
`;

export const DottedMenu = styled.button`
  display: flex;
  border: none;
  background-color: rgba(236, 241, 248, 0);
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  margin-right: 16px;
  cursor: pointer;
`;

export const ContextMenu = styled.div<{ isVisible: boolean }>`
  position: absolute;
  z-index: 1;
  width: 176px;
  height: 124px;
  padding: 24px 0;
  background-color: #fff;
  border-radius: 8px;
  right: -145px;
  top: 28px;
  opacity: ${(props) => (props.isVisible ? 0.94 : 0)};
  transform: ${(props) =>
    props.isVisible ? "translateY(0)" : "translateY(-10px)"};
  transition: opacity 0.8s ease, transform 0.8s ease;
  backdrop-filter: blur(21.75px);
  box-shadow: 0 24 24 0 #0000001f;

  @media (max-width: 480px) {
    right: 0px;
  }
`;

export const ContextMenuLine = styled.div`
  display: flex;
  height: 38px;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #ecf1f8;
    backdrop-filter: blur(54.36px);
  }

  img {
    width: 20px;
    height: 20px;
    margin: 0 24px 0 16px;
  }
`;

export const FollowersStat = styled.div`
  display: flex;
  line-height: 24px;
  width: fit-content;
  gap: 48px;
  margin: 24px 0;
`;

export const StatItem = styled.div`
  text-align: center;

  div {
    font-size: 18px;
    font-weight: 700;
  }

  span {
    font-size: 16px;
    color: #636363;
  }
`;

export const TextBlock = styled.div`
  width: 350px;
  color: #3e3f58;
  font-size: 16px;
  line-height: 24px;
`;
