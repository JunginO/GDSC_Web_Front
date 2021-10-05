import React, { useState } from "react";
import styled from "styled-components";
import MainInput from "../../../components/Input/MainInput";
import MainButton from "../../../components/Button/MainButton";
import { COLORS } from "../../../components/Colors";
import MypageTop from "../../../layout/MypageTop";
const NickChangeWrapper = styled.div`
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
`;

const NickChange = () => {
  const [nickname, setNickname] = useState("");

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  return (
    <NickChangeWrapper>
      <MypageTop title={"닉네임 변경"} />
      <div classname="input-box">
        <p className="text-label">닉네임</p>
        <MainInput
          value={nickname}
          type="text"
          onChange={onChangeNickname}
          placeholder="닉네임을 입력해주세요"
        />
      </div>
      <div className="button-box">
        <MainButton text="닉네임 설정" />
      </div>
    </NickChangeWrapper>
  );
};

export default NickChange;
