import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";
import SliderBoardItem from "./SliderBoardItem";
import { dummyPin } from "../../../components/dummyData";
const BoardWrapper = styled.div`
  .box-wrapper {
    display: block;
    border: 2px solid ${COLORS.grey_light};
    border-radius: 0.5em;
    padding: 15px;
    padding-left: 20px;
    margin-bottom: 10px;
  }
`;

const SliderBoard = () => {
  return (
    <BoardWrapper>
      <div className="box-wrapper">
        {dummyPin.map((data) => (
          <SliderBoardItem board={data} />
        ))}
      </div>
    </BoardWrapper>
  );
};

export default SliderBoard;
