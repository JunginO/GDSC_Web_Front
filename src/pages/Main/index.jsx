import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

import { COLORS } from "../../components/Colors";
import mypageLogo from "../../assets/nav/mypage.svg";
import searchLogo from "../../assets/nav/search.svg";

import BottomNavigation from "../../layout/BottomNavigation";
import RealTimeBoard from "./components/RealTimeBoard";
import Myboard from "./components/Myboard";
import Popular from "./components/Popular";
import LinkItem from "../../components/LinkItem";
import axios from "axios";

const MainWrapper = styled.div`
  width: 100%;
  padding-top: 70px;
  padding-bottom: 48px;

  .main-top-navigation {
    position: fixed; //position: fixed, absolute, relative 에 대해 알아보세요!
    width: 100%;
    max-width: 500px;
    top: 0px;
    height: 70px;
  }
  .top-guide-wrapper {
    padding: 16px; //네비게이션 상하좌우에 여백을 주기 위한 용도입니다.
    background-color: white;
    .everytime-text {
      color: ${COLORS.red};
      font-size: 10px;
    }
    .guide-contents-container {
      margin-top: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
        font-size: 16px;
        font-weight: 700;
      }
      .icon-wrapper {
        height: 20px;
        img {
          width: 20px;
          height: 20px;
        }
      }
      .mypage-icon {
        margin-left: 16px;
      }
    }
  }
  .setting-button {
    margin: 0px 16px;
    width: calc(100% - 32px);
    height: 48px;
    border-radius: 10px;
    background-color: ${COLORS.grey_400};
    span {
      width: 100%;
      display: inline-block;
      text-align: center;
      line-height: 1.1;
      font-weight: 700;
      color: ${COLORS.grey_600};
    }
  }
`;

const Index = () => {
  const history = useHistory();
  const onClickBtn = () => {
    history.push("/setting");
  };
  const [setting, setSetting] = useState({
    isMine: true,
    isRealTime: true,
    isHot: true,
  });
  useEffect(() => {
    const defaultSetting = { isMine: true, isRealTime: true, isHot: true };
    const storage = window.localStorage.getItem("setting");

    if (!storage) {
      // 유저가 처음 방문했을 때
      window.localStorage.setItem("setting", JSON.stringify(defaultSetting));
    } else {
      const storageJson = JSON.parse(storage);
      setSetting({
        isMine: storageJson.isMine,
        isHot: storageJson.isHot,
        isRealTime: storageJson.isRealTime,
      });
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = axios("/api/user/test");
        console.log((await result).data.data);
      } catch (err) {
        console.log(err, "errosr");
      }
    };
    fetchData();
  });

  return (
    <MainWrapper>
      {/* 상단 네비게이션 start*/}
      <div className="main-top-navigation">
        <div className="top-guide-wrapper">
          <p className="everytime-text">에브리타임</p>
          <div className="guide-contents-container">
            <h2>GDSC 웹</h2>
            <div className="icon-wrapper">
              <Link to="/search">
                <img src={searchLogo} alt="검색 아이콘" />
              </Link>
              <Link to="/mypage" className="mypage-icon">
                <img src={mypageLogo} alt="마이페에지 아이콘" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <LinkItem />
      {setting.isMine && <Myboard />}
      {setting.isRealTime && <RealTimeBoard />}
      {setting.isHot && <Popular />}
      <button className="setting-button" onClick={onClickBtn}>
        <span>홈 화면 설정</span>
      </button>
      {/* 하단 네비게이션 start */}
      <div className="bottom-navigation">
        <BottomNavigation activeNum={1} />
      </div>
      {/* 하단 네비게이션 end */}
    </MainWrapper>
  );
};

export default Index;
