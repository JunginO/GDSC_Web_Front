import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "./Colors";

import googleIcon from "../assets/icon/google.svg";
import googleBlackIcon from "../assets/icon/google_black.svg";
import schoolIcon from "../assets/icon/school.svg";
import noticeIcon from "../assets/icon/notice.svg";

const LinkItemWrapper = styled.div`
       .link-list-wrapper {
       margin-top:12px;
       margin-bottom: 20px;
       display: flex;
       justify-content: center;
    }
    .content {
        display: table-cell;
        vertical-align: middle;
        padding-left: 8px;
        padding-right: 8px;
    }

    .link-item-icon-wrapper{
        border-radius: 50%;
        background-color: ${COLORS.grey_light};
    }
    .link-item-text {
        font-size: 0.4em;
        text-align: center;
        padding-top: 2px;
    }
    img {
        margin:10px;
        width: 20px;
        height:20px;
    }
`

const LinkItem = ()=>{
    
    return(
    <LinkItemWrapper>
        <div class="link-list-wrapper">
        <a href="https://gdsc.community.dev/seoul-national-university-of-science-and-technology/" class="content">
            <div class="link-item-icon-wrapper">
                <img src={googleIcon} alt="GDSC 홈"/>
            </div>
            <p class="link-item-text">GDSC 홈</p>
        </a>
        <a href="https://google.com" class="content">
            <div class="link-item-icon-wrapper">
                <img src={googleBlackIcon} alt="구글" />
            </div>
            <p class="link-item-text">구글</p>
        </a>
        <a href="https://www.seoultech.ac.kr/index.jsp" class="content">
            <div class="link-item-icon-wrapper">
                <img src={schoolIcon} alt="학교 홈"/>
            </div>
            <p class="link-item-text">학교 홈</p>
        </a>
        <a href="https://www.seoultech.ac.kr/life/sch/common/" class="content">
            <div class="link-item-icon-wrapper">
                <img src={noticeIcon} alt="학사 공지"/>
            </div>
            <p class="link-item-text">학사 공지</p>
        </a>
    </div>
    </LinkItemWrapper>
    )
};
export default LinkItem;