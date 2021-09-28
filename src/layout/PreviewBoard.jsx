import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../components/Colors";
import likesIcon from "../assets/icon/like.png";
import commentsIcon from "../assets/icon/comment.png";

const PreviewBoardWrapper = styled.div`
    
    .small-icons {
        justify-content: flex-end;
        display: inline-block;
    }

    .like-comment-icons{
        width:11px;
        height:11px; 
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
    .inline-part {
        justify-content: space-between;
        display: flex;
        padding: 5px;
    }
    .title {
        font-size: 0.8em;
        font-weight: bold;
    }
    .content {
        font-size:0.75em;
        font-weight:400;
    }
    .main {
        padding-left: 5px;
        padding-top: 2px;
    }




    
`

const PreviewBoard=({title,contents,category,like,comments}) => {
    return(
        <PreviewBoardWrapper>
            <div className="main">
                <h1 className="title">{title}</h1>
                <p className="content">{contents}</p>
            </div>
            <div className="inline-part">
            <p className="cate">{category}</p>
                <div className="small-icons">
                    <img src={likesIcon} className="like-comment-icons"/>
                    <span className="like-icon" >{like}</span>
                    <img src={commentsIcon} className="like-comment-icons"/>
                    <span className="comment-icon">{comments}</span>
                </div>
            </div>
        </PreviewBoardWrapper>
    );
};
export default PreviewBoard;