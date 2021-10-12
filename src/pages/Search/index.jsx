import React from "react";
import styled from "styled-components";
import searchIcon from "../../assets/nav/search.svg";
import { COLORS } from "../../components/Colors";
import SearchInput from "./components/SearchInput";
const SearchWrapper = styled.div`
  .result-box {
    margin-top: 30px;
    text-align: center;
  }
  p {
    color: ${COLORS.grey_500};
  }
`;

const Index = () => {
  return (
    <SearchWrapper>
      <SearchInput />
      <div className="result-box">
        <img src={searchIcon} alt="검색아이콘" />
        <p>전체 게시판의 글을 검색해보세요</p>
      </div>
    </SearchWrapper>
  );
};

export default Index;
