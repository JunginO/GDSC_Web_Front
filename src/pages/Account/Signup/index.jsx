import React, { useState } from "react";
import styled from "styled-components";

import MainInput from "../../../components/Input/MainInput";
import MainButton from "../../../components/Button/MainButton";
import MypageTop from "../../../layout/MypageTop";

import axios from "axios";
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
  const [hp, setHP] = useState("");
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
  const onChangeHP = (e) => {
    setHP(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const onSubmitHandler = async () => {
    try {
      const result = await axios({
        method: "POST",
        url: "/api/user",
        data: {
          user_id: id,
          password: password,
          name: name,
          email: email,
          nickname: nickname,
          major: major,
          hp: hp,
        },
      });
      if (result.data.success) {
        window.location.replace("/");
      }
    } catch {
      alert("eeeeeeeeeeeeeeeeerror");
    }
  };

  return (
    <MainWrapper>
      <MypageTop title={"????????????"} />
      <div className="body-wrapper">
        <p className="text-label">?????????</p>
        <MainInput
          value={id}
          type="text"
          onChange={onChangeId}
          placeholder="id??? ??????????????????"
        />
        <p className="text-label">????????????</p>
        <MainInput
          value={password}
          type="password"
          onChange={onChangePassWord}
          placeholder="??????????????? ??????????????????"
        />
        {errorNum === 1 && (
          <p style={{ color: "red" }}> ???????????? ?????? ?????????</p>
        )}
        <p className="text-label">???????????? ??????</p>
        <MainInput
          value={rePassword}
          type="password"
          onChange={onChangeRePassword}
          placeholder="??????????????? ?????? ??????????????????"
        />
        {errorText === 1 && <p style={{ color: "red" }}> ???????????? ?????????</p>}
        <p className="text-label">??????</p>
        <MainInput
          value={name}
          type="name"
          onChange={onChangeName}
          placeholder="????????? ??????????????????"
        />
        <p className="text-label">?????????</p>
        <MainInput
          value={email}
          type="email"
          onChange={onChangeEmail}
          placeholder="???????????? ??????????????????"
        />
        {errorMail === 1 && (
          <p style={{ color: "red" }}>?????? ????????? ?????? ????????????</p>
        )}
        <p className="text-label">?????????</p>
        <MainInput
          value={nickname}
          type="nickname"
          onChange={onChangeNickname}
          placeholder="???????????? ??????????????????"
        />
        <p className="text-label">????????????</p>
        <MainInput
          value={hp}
          type="hp"
          onChange={onChangeHP}
          placeholder="??????????????? ??????????????????"
        />
        <p className="text-label">??????</p>
        <MainInput
          value={major}
          type="major"
          onChange={onChangeMajor}
          placeholder="????????? ??????????????????"
        />
        <div className="bottom-button">
          <MainButton text="????????????" onClick={onSubmitHandler} />
        </div>
      </div>
    </MainWrapper>
  );
};

export default Index;
