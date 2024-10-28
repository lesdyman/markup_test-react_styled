import styled from "styled-components";

export const StyledCard = styled.div`
position: relative;
width: 374px;
height: 280px;
background-color: #FFF;
box-shadow: 0px 24px 24px 0px #0000001F;
padding: 56px 24px 27px 24px;
border-radius: 8px;

.card-top {
  display: flex;
  position: absolute;
  gap: 4px;
  top: 24px;

  .text {
    font-size: 16px;
  }

  .tag {
    background-color: #ECF1F8;
    ;
    border-radius: 6px;
  }
}

.card-messege {
  font-family: "Montserrat", serif;
  font-size: 36px;
}

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
    background-color: #B2B3BB;
    ;
  };

  .share-button {
    text-decoration: none;
    font-size: 18px;
    color: #F05D63;
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
`