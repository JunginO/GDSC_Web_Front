import React from "react";
import BoardTop from "./BoardTop";
import styled from "styled-components";
import profile from "../../../assets/img/temp.png";
import { COLORS } from "../../../components/Colors";
import { dummyCareer } from "../../../components/dummyData";
import PreviewBoard from "../../../layout/PreviewBoard";
import MainInput from "../../../components/Input/MainInput";
const ContentWrapper = styled.div`
  .top-title {
    margin: 50px 16px 0px 16px;
  }
  .profile {
    width: 30px;
    height: 30px;
  }
  .name,
  .date {
    margin-left: 5px;
    font-size: 0.8em;
  }
  .date {
    color: ${COLORS.grey_500};
  }
  .top-text {
    display: inline-block;
  }
`;

const Index = () => {
  return (
    <ContentWrapper>
      <BoardTop />
      <div className="top-title">
        <img src={profile} className="profile" alt="프로필아이콘" />
        <div className="top-text">
          <p className="name">익명</p>
          <p className="date">시간</p>
        </div>
      </div>
      {dummyCareer.map((d) => (
        <PreviewBoard
          title={d.title}
          contents={d.contents}
          category={d.category}
          like={d.like}
          comments={d.comments}
        />
      ))}
      <div className="comment-input">
        <MainInput type="text" placeholder="댓글을 입력해주세요,,," />
      </div>
    </ContentWrapper>
  );
};

export default Index;
