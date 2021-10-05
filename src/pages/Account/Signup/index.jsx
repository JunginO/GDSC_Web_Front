import React, { useState } from "react";
import styled from "styled-components";

import MainInput from "../../../components/Input/MainInput";
import MainButton from "../../../components/Button/MainButton";
import MypageTop from "../../../layout/MypageTop";
const MainWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 48px;

  .text-label {
    margin-bottom: 5px;
    margin-top: 26px;
    font-size: 10px;
  }

  .body-wrapper p {
    font-size: 10px;
  }

  .bottom-button {
    margin-top: 20px;
  }
  .body-wrapper {
    margin: 0px 16px;
  }
`;

const Index = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [major, setMajor] = useState("");

  const [errorNum, setErrorNum] = useState(0);
  const [errorText, setErrorText] = useState(0);
  const [errorMail, setErrorMail] = useState(0);

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePassWord = (e) => {
    const { value } = e.target;

    const patternSpecial = /[~!@#$%^&*()_+|<>?:{}]/;
    const patternEng = /[a-zA-Z]/;
    const patternNum = /[0-9]/;

    if (
      !patternSpecial.test(value) ||
      !patternEng.test(value) ||
      !patternNum.test(value)
    ) {
      setErrorNum(1);
    } else {
      setErrorNum(0);
    }
    setPassword(value);
  };

  const onChangeRePassword = (e) => {
    const { value } = e.target;
    if (value !== password) {
      setErrorText(1);
    } else {
      setErrorText(0);
    }
    setRePassword(value);
  };

  const onChangeEmail = (e) => {
    const { value } = e.target;
    const patternEmail =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

    if (!patternEmail.test(value)) {
      setErrorMail(1);
    } else {
      setErrorMail(0);
    }
    setEmail(value);
  };

  const onChangeMajor = (e) => {
    setMajor(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  return (
    <MainWrapper>
      <MypageTop title={"회원가입"} />
      <div className="body-wrapper">
        <p className="text-label">아이디</p>
        <MainInput
          value={id}
          type="text"
          onChange={onChangeId}
          placeholder="id를 입력해주세요"
        />
        <p className="text-label">비밀번호</p>
        <MainInput
          value={password}
          type="password"
          onChange={onChangePassWord}
          placeholder="비밀번호를 입력해주세요"
        />
        {errorNum === 1 && (
          <p style={{ color: "red" }}> 비밀번호 조건 불일치</p>
        )}
        <p className="text-label">비밀번호 확인</p>
        <MainInput
          value={rePassword}
          type="password"
          onChange={onChangeRePassword}
          placeholder="비밀번호를 다시 입력해주세요"
        />
        {errorText === 1 && <p style={{ color: "red" }}> 비밀번호 불일치</p>}
        <p className="text-label">이름</p>
        <MainInput
          value={name}
          type="name"
          onChange={onChangeName}
          placeholder="이름을 입력해주세요"
        />
        <p className="text-label">이메일</p>
        <MainInput
          value={email}
          type="email"
          onChange={onChangeEmail}
          placeholder="이메일을 입력해주세요"
        />
        {errorMail === 1 && (
          <p style={{ color: "red" }}>메일 형식이 맞지 않습니다</p>
        )}
        <p className="text-label">닉네임</p>
        <MainInput
          value={nickname}
          type="nickname"
          onChange={onChangeNickname}
          placeholder="닉네임을 입력해주세요"
        />
        <p className="text-label">전공</p>
        <MainInput
          value={major}
          type="major"
          onChange={onChangeMajor}
          placeholder="전공을 입력해주세요"
        />
        <div className="bottom-button">
          <MainButton text="회원가입" onClick={() => alert("회원가입")} />
        </div>
      </div>
    </MainWrapper>
  );
};

export default Index;
