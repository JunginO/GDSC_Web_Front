import React from "react";
import styled from "styled-components";
import { COLORS } from "./Colors";
import RightImg from "../assets/vector/vectorRightRed.svg";
import { Link } from "react-router-dom";

const ShowMoreWrapper = styled.div`
  .more {
    font-size: 0.8em;
    font-weight: 400;
    color: ${COLORS.red};
  }

  img {
    width: 10px;
    height: 10px;
    vertical-align: middle;
    display: inline-block;
  }
`;
const ShowMore = ({ link }) => {
  return (
    <ShowMoreWrapper>
      <div>
        <Link to={link}>
          <span className="more">더 보기</span>
          <img src={RightImg} alt="더보기" />
        </Link>
      </div>
    </ShowMoreWrapper>
  );
};

export default ShowMore;
