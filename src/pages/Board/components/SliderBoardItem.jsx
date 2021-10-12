import React, { useState } from "react";
import styled from "styled-components";
import pinOn from "../../../assets/icon/pinOn.svg";
import pinOff from "../../../assets/icon/pinOff.svg";

const ItemWrapper = styled.div`
  display: flex;
  img {
    display: inline;
    height: 17px;
    width: 17px;
    vertical-align: middle;
  }
  a {
    margin-left: 15px;
    font-size: 15px;
  }
  .button-wrapper {
    margin: 10px;
  }
`;

const SliderBoardItem = ({ board }) => {
  const [icon, setIcon] = useState(true);
  const onChangeIcon = (e) => {
    setIcon(icon ? false : true);
  };
  return (
    <ItemWrapper>
      <div>
        <button className="button-wrapper">
          <button onClick={onChangeIcon}>
            <img src={icon ? pinOn : pinOff} alt="핀 아이콘" />
          </button>
          <a href="/board/list">{board.title}</a>
        </button>
      </div>
    </ItemWrapper>
  );
};

export default SliderBoardItem;
