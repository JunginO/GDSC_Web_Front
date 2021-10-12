import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import xVector from "../../assets/vector/xVector.svg";
import { COLORS } from "../../components/Colors";
import camera from "../../assets/icon/camera.svg";
const PostWrapper = styled.div`
  .top-navigation {
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 16px;
  }

  img {
    width: 15px;
    height: 15px;
  }
  .text-title {
    font-size: 14px;
    margin-left: 20px;
  }
  .finish {
    margin-left: auto;
    background-color: ${COLORS.red};
    padding: 3px 8px;
    border-radius: 10px;
  }
  .finish span {
    color: white;
    font-size: 13px;
  }
  .post-title {
    width: calc(100% - 32px);
    padding: 16px 0px;
    margin: 0px 16px;
    border-bottom: 1px solid rgb(158, 164, 170);
    font-size: 18px;
  }
  .post-content {
    width: calc(100% - 32px);
    margin: 16px;
    height: auto;
    overflow-x: hidden;
    min-height: 150px;
    max-height: 500px;
    line-height: 1.25;
  }

  .main {
    margin-top: 48px;
  }
  .input-file {
    padding: 6px 25px;
    border-radius: 4px;
    color: white;
    cursor: pointer;
  }
  .secret-input {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    border: 1px solid ${COLORS.grey_400};
  }
  .bottom-box {
    position: fixed;
    bottom: 0px;
    display: flex;
    justify-content: space-between;
  }
`;

const Index = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <PostWrapper>
      <div className="top-navigation">
        <button onClick={goBack}>
          <img src={xVector} alt="닫기" />
        </button>
        <p className="text-title">글 쓰기</p>

        <button className="finish" onClick={() => alert("완료!")}>
          <span>완료</span>
        </button>
      </div>
      <div className="main">
        <form>
          <input class="post-title" type="text" placeholder="제목" value="" />
          <textarea
            class="post-content"
            placeholder="내용을 입력하세요."
            spellcheck="false"
            wrap="physical"
          ></textarea>
        </form>
      </div>
      <div class="bottom-box">
        <input
          type="file"
          style={{ display: "none" }}
          id="upload_photo"
          accept="image/*"
        />
        <label for="upload_photo" className="input-file">
          <img src={camera} alt="사진 추가" class="photo-icon" />
        </label>
        <div class="user-option-wrapper">
          <input type="checkbox" id="isSecret" class="secret-input" />
          <label for="isSecret" class="secret-label">
            익명
          </label>
        </div>
      </div>
    </PostWrapper>
  );
};

export default Index;
