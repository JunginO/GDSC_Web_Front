import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../components/Colors";

import likesIcon from "../assets/icon/like.png";
import commentsIcon from "../assets/icon/comment.png";

const PreviewOnlyTitleWrapper = styled.div`
  img {
    width: 11px;
    height: 11px;
  }
  .like-icon {
    display: inline-block;
    color: ${COLORS.red};
    font: 11px;
  }
  .comment-icon {
    color: ${COLORS.green};
  }
  span {
    font-size: 0.6em;
    margin: 2px;
  }
  .date {
    color: ${COLORS.grey_500};
    font-size: 0.6em;
  }

  .inline-part {
    justify-content: space-between;
    display: flex;
  }
  .data-box {
    padding-top: 10px;
  }

  .title {
    font-size: 0.8em;
    padding-bottom: 2px;
    font-weight: 400;
  }
  .icon-comment-box {
    justify-content: space-between;
    display: flex;
  }
`;

const PreviewOnlyTitle = ({ title, date, like, comments, link }) => {
  return (
    <PreviewOnlyTitleWrapper>
      <Link to={link}>
        <div className="data-box">
          <p className="title">{title}</p>
          <div className="inline-part">
            <p className="date">{date}</p>
            <div className="icon-comment-box">
              <img src={likesIcon} alt="추천" />
              <span className="like-icon">{like}</span>
              <img src={commentsIcon} alt="비추천" />
              <span className="comment-icon">{comments}</span>
            </div>
          </div>
        </div>
      </Link>
    </PreviewOnlyTitleWrapper>
  );
};
export default PreviewOnlyTitle;
