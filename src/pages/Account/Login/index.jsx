import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import MainInput from "../../../components/Input/MainInput";
import MainButton from "../../../components/Button/MainButton";
import logo from "../../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { COLORS } from "../../../components/Colors";

const MainWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 48px;

  .sub-text {
    color: ${COLORS.grey_400};
    font-size: 10px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .title-text {
    color: ${COLORS.red};
    text-align: center;
    margin-bottom: 20px;
  }
  .title-wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    margin: auto;
    width: 60px;
    height: 60px;
  }
  .input-wrap {
    margin: 2px 8px 8px;
  }
  .signup-button {
    text-align: center;
  }
`;

const Index = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    if (isFocus) {
      setIsFocus(false);
    } else {
      setIsFocus(true);
    }
  };
  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickLogin = async () => {
    try {
      const result = await axios({
        method: "POST",
        url: "/api/user/login",
        data: {
          user_id: userId,
          password: password,
        },
      });
      if (result.data.success) {
        window.location.replace("/");
      } else {
        alert("로그인오류");
      }
    } catch {
      alert("server error");
    }
  };

  return (
    <MainWrapper>
      <div
        className="title-wrap"
        style={isFocus ? { display: "none" } : { display: "block" }}
      >
        <img className="title-wrap" src={logo} alt="로고" />
        <p className="sub-text">대학 생활을 더 편하고 즐겁게</p>
        <p className="title-text">에브리타임</p>
      </div>
      <div className="input-wrap">
        <MainInput
          type="text"
          placeholder="아이디"
          handleFocus={handleFocus}
          onChange={onChangeUserId}
        />
      </div>
      <div className="input-wrap">
        <MainInput
          type="password"
          placeholder="비밀번호"
          handleFocus={handleFocus}
          onChange={onChangePassword}
        />
      </div>
      <div className="input-wrap">
        <MainButton text="에브리타임 로그인" onClick={onClickLogin} />
      </div>
      <div className="signup-button">
        <p>
          <Link
            to="/signup"
            style={isFocus ? { display: "none" } : { display: "block" }}
          >
            회원가입
          </Link>
        </p>
      </div>
    </MainWrapper>
  );
};

export default Index;
