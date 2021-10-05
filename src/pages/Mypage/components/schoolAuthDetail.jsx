import React, { useState } from "react";
import styled from "styled-components";
import MainInput from "../../../components/Input/MainInput";
import MainButton from "../../../components/Button/MainButton";
import { COLORS } from "../../../components/Colors";
import MypageTop from "../../../layout/MypageTop";
const MainWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 48px;

  .text-label {
    margin-bottom: 8px;
    margin-top: 26px;
    font-size: 12px;
    color: ${COLORS.grey_500};
  }
  .button-box {
    margin-top: 20px;
  }
  .body-wrapper {
    margin: 0px 16px;
  }
`;

const SchoolAuthDetail = () => {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(0);
  const onChangeEmail = (e) => {
    const patternEmail =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    if (!patternEmail.test(e.target.value)) {
      setErrorEmail(1);
    } else {
      setErrorEmail(0);
    }
    setEmail(e.target.value);
  };
  return (
    <MainWrapper>
      <MypageTop title={"이메일 인증"} />
      <div className="body-wrapper">
        <div classname="input-box">
          <p className="text-label">이메일 입력</p>
          <MainInput
            value={email}
            type="text"
            onChange={onChangeEmail}
            placeholder="이메일을 입력해주세요"
          />
          {errorEmail === 1 && (
            <p style={{ color: "red" }}>메일 형식이 맞지 않습니다</p>
          )}
        </div>
        <div className="button-box">
          <MainButton text="이메일 보내기" />
        </div>
      </div>
    </MainWrapper>
  );
};

export default SchoolAuthDetail;
