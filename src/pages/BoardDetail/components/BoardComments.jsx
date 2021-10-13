import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";

import likesIcon from "../../../assets/icon/like.png";
import profile from "../../../assets/img/temp.png";
import more from "../../../assets/icon/more.svg";

const BoardCommentsWrapper = styled.div`
  border-bottom: 2px solid ${COLORS.grey_300};
  .icon-img {
    width: 10px;
    height: 10px;
    vertical-align: bottom;
  }
  .like-icon {
    color: ${COLORS.red};
    font: 10px;
  }
  .comment-icon {
    color: ${COLORS.green};
  }

  .date {
    color: ${COLORS.grey_500};
    font-size: 10px;
    margin-left: 0px;
  }

  .inline-part {
    justify-content: space-between;
    display: flex;
  }
  .data-box {
    padding-top: 10px;
    padding-bottom: 5px;
  }

  .title {
    font-size: 0.8em;
    padding-bottom: 2px;
    font-weight: 400;
  }
  .top-part img {
    width: 20px;
    border-radius: 8px;
    vertical-align: middle;
  }

  .comment {
    font-weight: 400px;
    font-size: 12px;
  }
  .left-box img {
    width: 10px;
    filter: opacity(0.2) drop-shadow(0 0 0 ${COLORS.black});
  }
  .left-box {
    background-color: ${COLORS.grey_300};
    border-radius: 5px;
  }
  .top-part {
    display: flex;
    justify-content: space-between;
  }
  button {
    padding: 0px 8px 0px;
  }
`;

const BoardComments = ({ comment, date, like }) => {
  return (
    <BoardCommentsWrapper>
      <div className="data-box">
        <div className="top-part">
          <div className="profile-box">
            <img src={profile} alt="프로필이미지" />
            <span className="name"> 익명</span>
          </div>
          <div className="left-box">
            <button>
              <img src={likesIcon} alt="좋아요 버튼" />
            </button>
            <button>
              <img src={more} alt="좋아요 버튼" />
            </button>
          </div>
        </div>
        <div className="inline-part">
          <p className="comment">{comment}</p>
        </div>
        <span className="date">{date}</span>
        <img src={likesIcon} alt="추천" className="icon-img" />
        <span className="like-icon">{like}</span>
      </div>
    </BoardCommentsWrapper>
  );
};
export default BoardComments;
