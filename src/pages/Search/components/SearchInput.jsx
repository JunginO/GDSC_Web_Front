import React from "react";
import styled from "styled-components";
import arrow from "../../../assets/vector/arrow.svg";
import search from "../../../assets/nav/search.svg";
import { useHistory } from "react-router";
import { COLORS } from "../../../components/Colors";
const SearchCustom = styled.div`
  .text-wrapper {
    font-size: 14px;
  }
  span {
    color: ${COLORS.grey_600};

    vertical-align: middle;
  }
  .search {
    margin-left: auto;
  }
  .searchImg {
    width: 20px;
    vertical-align: middle;
  }
  .arrow {
    width: 15px;
    transform: rotate(180deg);
    vertical-align: middle;
  }
  .search-box {
    width: calc(100% - 32px);
    height: 32px;
    background: ${COLORS.grey_300};
    border-radius: 10px;
    padding: 0px 16px;
    display: flex;
    align-items: center;
    margin-left: 16px;
    margin: 10px;
  }
`;

const SearchInput = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <SearchCustom>
      <div className="search-box">
        <button>
          <img src={arrow} alt="화살표" className="arrow" onClick={goBack} />
        </button>
        <div class="text-wrapper">
          <span>글 제목, 내용, 해시태그</span>
        </div>
        <button className="search">
          <img
            src={search}
            alt="검색"
            className="searchImg"
            onClick={() => {
              alert("검색!");
            }}
          />
        </button>
      </div>
    </SearchCustom>
  );
};

export default SearchInput;
