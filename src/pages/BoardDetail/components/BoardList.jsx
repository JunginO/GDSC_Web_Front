import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";
import likesIcon from "../../../assets/icon/like.png";
import commentsIcon from "../../../assets/icon/comment.png";
import { Link } from "react-router-dom";
const BoardListWrapper = styled.div`
  .like-comment-icons {
    width: 11px;
    height: 11px;
    vertical-align: middle;
  }
  span {
    font-size: 0.6em;
    margin: 2px;
  }
  .like-icon {
    color: ${COLORS.red};
  }
  .comment-icon {
    color: ${COLORS.green};
  }

  .cate {
    color: ${COLORS.grey_500};
    font-size: 0.6em;
    display: inline-block;
  }

  .title {
    font-size: 0.8em;
    font-weight: bold;
  }
  .content {
    font-size: 0.75em;
    font-weight: 400;
  }

  .board-container {
    padding: 8px 16px;
    border-bottom: solid 1px ${COLORS.grey_400};
  }
  .small-icons {
    text-align: right;
  }
`;

const BoardList = ({ title, contents, like, comments, link }) => {
  return (
    <BoardListWrapper>
      <Link to={link}>
        <div className="board-container">
          <h1 className="title">{title}</h1>
          <p className="content">{contents}</p>

          <div className="small-icons">
            <img src={likesIcon} className="like-comment-icons" alt="추천" />
            <span className="like-icon">{like}</span>
            <img
              src={commentsIcon}
              className="like-comment-icons"
              alt="비추천"
            />
            <span className="comment-icon">{comments}</span>
          </div>
        </div>
      </Link>
    </BoardListWrapper>
  );
};
export default BoardList;
