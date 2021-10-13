import React from "react";
import BoardTop from "./BoardTop";
import styled from "styled-components";
import profile from "../../../assets/img/temp.png";
import { COLORS } from "../../../components/Colors";
import likeBtn from "../../../assets/icon/like.png";
import commentBtn from "../../../assets/icon/comment.png";
import MainInput from "../../../components/Input/MainInput";
import BoardComments from "./BoardComments";
import { dummyHot } from "../../../components/dummyData";
const ContentWrapper = styled.div`
  .top-title {
  }
  .profile {
    width: 30px;
    height: 30px;
    border-radius: 5px;
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
  .like-icon {
    color: ${COLORS.red};
    font-size: 12px;
  }
  .comment-icon {
    color: ${COLORS.green};
    font-size: 12px;
  }
  .like-comment-icons {
    width: 11px;
    height: 11px;
    vertical-align: middle;
  }
  img {
    padding: 3px;
  }
  .like-button img {
    width: 10px;
    filter: opacity(0.1) drop-shadow(0 0 0 ${COLORS.grey_600});
  }
  .like-button span {
    color: ${COLORS.grey_600};
  }
  .like-button {
    background-color: ${COLORS.grey_300};
    border-radius: 5px;
    padding: 3px 6px;
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .board-content {
    font-weight: 400;
    margin: 10px 0px;
    font-size: 12px;
  }
  .board-content-container {
    margin-top: 10px;
  }
  .post-wrapper {
    border-bottom: solid 1px ${COLORS.grey_400};
  }
  .comment-input {
    width: 90%;
    max-width: 500px;
    position: fixed;
    bottom: 0px;
  }
`;

const Index = () => {
  return (
    <ContentWrapper>
      <BoardTop />
      <div className="post-wrapper">
        <div className="top-title">
          <img src={profile} className="profile" alt="프로필아이콘" />
          <div className="top-text">
            <p className="name">익명</p>
            <p className="date">시간</p>
          </div>
        </div>
        <div class="board-content-container">
          <h1 class="board-title">gdsc 게시글 첫번 째</h1>
          <p class="board-content">
            gdsc 첫번 째 게시글 입니다. 모두들 만나서 반가워요
          </p>
        </div>
        <div className="small-icons">
          <img src={likeBtn} className="like-comment-icons" alt="추천" />
          <span className="like-icon">0</span>
          <img src={commentBtn} className="like-comment-icons" alt="비추천" />
          <span className="comment-icon">3</span>
        </div>
        <button class="like-button">
          <img src={likeBtn} alt="공감 아이콘" />
          <span>공감</span>
        </button>
      </div>
      {dummyHot.map((d) => (
        <BoardComments comment={d.title} date={d.date} like={d.like} />
      ))}
      <div className="comment-input">
        <MainInput type="text" placeholder="댓글을 입력해주세요,,," />
      </div>
    </ContentWrapper>
  );
};

export default Index;
