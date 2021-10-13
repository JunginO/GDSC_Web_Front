import React, { useState } from "react";
import { useHistory } from "react-router";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import { COLORS } from "../../components/Colors";
import arrow from "../../assets/vector/arrow.svg";
import iconImg from "../../assets/icon/new.svg";

const SettingWrapper = styled.div`
  padding-top: 48px;
  input[type="checkbox"] {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    border: 1px solid ${COLORS.grey_400};
  }

  input[type="checkbox"]:checked {
    width: 12px;
    height: 12px;
    border: none;
    border-radius: 100%;
    background: url("${iconImg}");
    background-color: ${COLORS.red};
    border: 1px solid ${COLORS.red};
  }

  .input-container {
    border-radius: 5px;
    border: 1px solid ${COLORS.grey_400};
  }

  img {
    width: 30px;
    vertical-align: middle;
    transform: rotate(180deg);
  }
  .top-navigation {
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 16px;
  }
  .top-navigation h2 {
    margin-left: 24px;
  }
  .input-container {
    border: 2px solid ${COLORS.grey_300};
    border-radius: 5px;
    margin: 0px 8px;
    padding: 0px 0px 16px;
  }
  .select-wrapper {
    margin: 16px 12px 0px;
  }
  label {
    margin-left: 24px;
    font-weight: 400;
  }
`;

const Index = () => {
  const [setting, setSetting] = useState({
    isMine: false,
    isHot: false,
    isRealTime: false,
  });
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  const onChangeCheck = (e) => {
    if (e.target.checked) {
      const newObj = { ...setting, [e.target.name]: true };
      window.localStorage.setItem("setting", JSON.stringify(newObj));
      setSetting(newObj);
    } else {
      const newObj = { ...setting, [e.target.name]: false };
      window.localStorage.setItem("setting", JSON.stringify(newObj));
      setSetting(newObj);
    }
  };

  useEffect(() => {
    const storageJson = JSON.parse(window.localStorage.getItem("setting"));
    setSetting({
      isMine: storageJson.isMine,
      isHot: storageJson.isHot,
      isRealTime: storageJson.isRealTime,
    });
  }, []);
  return (
    <SettingWrapper>
      <div className="top-navigation">
        <button>
          <img src={arrow} alt="화살표" className="arrow" onClick={goBack} />
        </button>
        <h2>홈 화면 설정</h2>
      </div>

      <div className="input-container">
        <div className="select-wrapper">
          <input
            type="checkbox"
            name="isMine"
            id="isMine"
            checked={setting.isMine}
            onChange={onChangeCheck}
          />
          <label htmlFor="isMine">즐겨찾는 게시판</label>
        </div>
        <div className="select-wrapper">
          <input
            type="checkbox"
            name="isHot"
            id="isHot"
            checked={setting.isHot}
            onChange={onChangeCheck}
          />
          <label htmlFor="isHot">HOT 게시판</label>
        </div>
        <div className="select-wrapper">
          <input
            type="checkbox"
            name="isRealTime"
            id="isRealTime"
            checked={setting.isRealTime}
            onChange={onChangeCheck}
          />
          <label htmlFor="isRealTime">실시간 인기글</label>
        </div>
      </div>
    </SettingWrapper>
  );
};

export default Index;
