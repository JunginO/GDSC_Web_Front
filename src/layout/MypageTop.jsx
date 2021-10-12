import React from "react";
import styled from "styled-components";
import xVector from "../assets/vector/xVector.svg";
import { useHistory } from "react-router";

const MypageTopWrapper = styled.div`
  .top-navigation {
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 16px;
  }

  img {
    width: 15px;
    height: 15px;
  }
  .text-title {
    font-size: 14px;
  }
`;
const MypageTop = ({ title }) => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <MypageTopWrapper>
      <div className="top-navigation">
        <p className="text-title">{title}</p>
        <button onClick={goBack}>
          <img src={xVector} alt="닫기" />
        </button>
      </div>
    </MypageTopWrapper>
  );
};

export default MypageTop;
