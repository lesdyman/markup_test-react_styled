import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  max-width: 374px;
  min-width: 240px;
  background-color: #fff;
  box-shadow: 0px 24px 24px 0px #0000001f;
  padding: 56px 24px 27px 24px;
  border-radius: 8px;

  .card-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 46px;

    .wrapper {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .round {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: #b2b3bb;
    }

    .share-button {
      text-decoration: none;
      font-size: 18px;
      color: #f05d63;
      cursor: pointer;
    }

    .stat-wrapper {
      display: flex;
      gap: 16px;
    }

    .stat-item {
      display: flex;
      align-items: center;
      gap: 8px;

      img {
        width: 16px;
        height: 16px;
      }
    }
  }

  .card-messege {
    font-family: "Montserrat", serif;
    font-size: 36px;
  }

  .card-top {
    display: flex;
    position: absolute;
    gap: 4px;
    top: 24px;

    .text {
      white-space: nowrap;
      font-size: 16px;
    }

    .tag {
      background-color: #ecf1f8;
      border-radius: 6px;
      width: fit-content;
      max-width: 140px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;