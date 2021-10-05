import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";
import MypageTop from "../../../layout/MypageTop";
import { Link } from "react-router-dom";
const SchoolAuthWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 48px;

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 16px;
  }

  .button-box {
    margin: 0px 16px;
    width: 480px;
    background-color: ${COLORS.grey_300};
    padding: 12px 0px;
    border-radius: 3%;
  }

  .inner-text {
    color: ${COLORS.grey_600};
    font-size: 10px;
    margin: 2px 0px 0px 12px;
  }
  span {
    font-size: 13px;
    margin-left: 12px;
  }
`;

const schoolAuth = () => {
  return (
    <SchoolAuthWrapper>
      <MypageTop title={"학교 인증"} />
      <h1>인증 방식 선택</h1>
      <button className="button-box">
        <Link to="/mypage/auth/detail">
          <span>재학생 인증</span>
          <p className="inner-text">
            게시판 등 모든 커뮤니티 이용이 가능하며,{" "}
          </p>
          <p className="inner-text">재학 증명 자료를 통해 인증</p>
        </Link>
      </button>
    </SchoolAuthWrapper>
  );
};

export default schoolAuth;
