import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../components/Colors";
import { dummyRealtime } from "../../../components/dummyData";
import likesIcon from "../../../assets/icon/like.png";
import commentsIcon from "../../../assets/icon/comment.png";
import PreviewProfile from "../../../layout/PreviewProfile";
import PreviewBoard from "../../../layout/PreviewBoard";


const RTBWrapper = styled.div`
    display:block;
    border:2px solid ${COLORS.grey_light};
    border-radius: 0.5em;
    padding: 3px;
    margin-bottom: 10px;
    
    .time {
        color: ${COLORS.grey_500};
        font-size: 0.6em;
        display: inline-block;
    }
    .inline-part {
        justify-content: space-between;
        display: flex;
        padding: 5px;
    }

    .body {
        padding: 8px;
    }
    .top-title {
        padding-left: 15px;
        padding-top: 10px;
        
    }

    h1{
        font-weight: bold;
    }
    
`;

const RealTimeBoard = ()=>{

    return(
        <RTBWrapper>
            <div className="top-title">
            <h1>실시간 인기 글</h1>
            </div>
            <div>
            {dummyRealtime.map((d)=>(
            <div className="body">
                <div className="inline-part">
                <PreviewProfile 
                nick={d.nick}/>
                <p className="time">{d.date}</p>
                </div>
                <PreviewBoard
                title={d.title}
                contents={d.contents}
                category={d.category}
                like={d.like}
                comments={d.comments}
                />
            </div>
            ))}
            </div>

        </RTBWrapper>
    );
};

export default RealTimeBoard;