import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import arrow from "../../../assets/vector/arrow.svg";

import search from "../../../assets/nav/search.svg";
import { COLORS } from "../../../components/Colors";

const BoardTopWrapper = styled.div`
  .top-box {
    height: 48px;
    display: flex;
    align-items: center;
  }

  .arrow {
    width: 30px;
    vertical-align: middle;
    transform: rotate(180deg);
  }
  h4 {
    font-size: 12px;
  }
  h5 {
    font-size: 12px;
    color: ${COLORS.grey_500};
  }
  .text-wrapper {
    margin-left: 15px;
  }
  .search {
    margin-left: auto;
  }
  .searchImg {
    width: 25px;
  }
`;

const BoardTop = ({ data }) => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  const handleClick = (e) => {
    window.location.href = "/search";
  };
  return (
    <BoardTopWrapper>
      <div className="top-box">
        <button>
          <img src={arrow} alt="화살표" className="arrow" onClick={goBack} />
        </button>
        <div class="text-wrapper">
          <h4>{data}</h4>
          <h5>GDSC</h5>
        </div>
        <button onClick={handleClick} className="search">
          <img src={search} alt="검색" className="searchImg" />
        </button>
      </div>
    </BoardTopWrapper>
  );
};
export default BoardTop;
