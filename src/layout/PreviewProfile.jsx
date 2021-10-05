import React from "react";
import styled from "styled-components";

import profileIcon from "../assets/img/temp.png";

const PreviewProfileWrapper = styled.div`
  .profile {
    width: 14px;
    height: 14px;
  }
  .name {
    display: inline;
    margin-left: 5px;
    font-size: 0.8em;
  }
`;

const PreviewProfile = ({ nick }) => {
  return (
    <PreviewProfileWrapper>
      <img src={profileIcon} className="profile" alt="프로필아이콘" />
      <p className="name">{nick}</p>
    </PreviewProfileWrapper>
  );
};
export default PreviewProfile;
