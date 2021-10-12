import React from "react";
import styled from "styled-components";
import BoardList from "./components/BoardList";
import BoardTop from "./components/BoardTop";
import { dummyCareer } from "../../components/dummyData";
import pencil from "../../assets/icon/pencil.svg";
import { COLORS } from "../../components/Colors";
const BoardDetailWrapper = styled.div`
  width: 100%;
  padding-top: 40px;

  .pencil-icon {
    width: 10px;
    margin: 5px;
  }
  .write-text {
  }
  .write-button {
    background-color: ${COLORS.grey_300};
    padding: 8px;
    bottom: 10px;
    border-radius: 15px;
    position: fixed;
    bottom: 0px;
    left: 50%;
  }
`;

const Index = () => {
  const handleClick = (e) => {
    window.location.href = "/board/post";
  };
  return (
    <BoardDetailWrapper>
      <BoardTop />
      <div className="box-wrapper">
        {dummyCareer.map((d) => (
          <BoardList
            title={d.title}
            comments={d.comments}
            like={d.like}
            contents={d.contents}
            link={d.detaillink}
          />
        ))}
      </div>

      <button class="write-button" onClick={handleClick}>
        <img src={pencil} alt="연필 아이콘" class="pencil-icon" />
        <span class="write-text">글 쓰기</span>
      </button>
    </BoardDetailWrapper>
  );
};

export default Index;
