import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import arrow from "../../assets/vector/arrow.svg";
import profileIcon from "../../assets/img/temp.png";
import { COLORS } from "../../components/Colors";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { customStyles } from "../../components/ModalOption";

const MypageWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 48px;
  .profile {
    width: 40px;
    height: 40px;
    border-radius: 3px;
  }
  .arrow {
    width: 30px;
    vertical-align: middle;
    transform: rotate(180deg);
  }
  .top-navigation {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 16px;
  }
  .profile-wrap {
    margin: 5px;
    border: 2px solid ${COLORS.grey_400};
    border-radius: 3px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .profile-image {
    margin: 10px;
  }
  .account-wrap {
    margin: 5px;
    border: 2px solid ${COLORS.grey_400};
    border-radius: 3px;
    padding: 10px;
  }
  .top-navigation h2 {
    margin-left: 24px;
  }
  button {
    display: block;
  }
  .account-text {
    font-size: 12px;
    margin-top: 10px;
    font-weight: 400;
  }
  .profile-text-area p {
    font-size: 10px;
    color: ${COLORS.grey_600};
    margin: 2px 0px;
    font-weight: 400;
  }
  .profile-text-area strong {
    font-size: 13px;
    font-weight: 500;
  }
`;

const ModalWrapper = styled.div`
  width: 100%;
  padding: 16px 0px;
  p {
    font-size: 12px;
    margin: 0px 16px;
  }
  .button-wrapper {
    margin: 16px 0px;
    float: right;
  }
  button {
    padding: 0px 12px;
    color: ${COLORS.red};
    font-size: 12px;
    font-weight: 400;
  }
`;

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <MypageWrapper>
      <div className="top-navigation">
        <button>
          <img src={arrow} alt="?????????" className="arrow" onClick={goBack} />
        </button>
        <h2>??? ??????</h2>
      </div>
      <div className="profile-wrap">
        <div className="profile-image">
          <img src={profileIcon} className="profile" alt="??????????????????" />
        </div>
        <div class="profile-text-area">
          <strong>JunginO</strong>
          <p>????????? / hardertobreathe</p>
          <p>??????????????? 19??????</p>
        </div>
      </div>
      <div className="account-wrap">
        <h2>??????</h2>
        <Link to="/mypage/auth">
          <p className="account-text">?????? ??????</p>
        </Link>
        <Link to="/mypage/edit">
          <p className="account-text">????????? ??????</p>
        </Link>

        <button onClick={openModal}>
          <p className="account-text"> ????????????</p>
        </button>
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          ariaHideApp={false}
          contentLabel="???????????? ??????"
          style={customStyles}
        >
          <ModalWrapper>
            <div className="modal-box">
              <p className="modal-text">
                ????????? ????????????????????????? ????????? ?????? ?????? ????????? ????????? ????????????
                ????????? ??????????????????
              </p>
              <div className="button-wrapper">
                <button onClick={() => setIsOpen(false)}>??????</button>
                <button onClick={() => alert("??????!")}>??????</button>
              </div>
            </div>
          </ModalWrapper>
        </Modal>
        <p className="account-text">????????????</p>
      </div>
    </MypageWrapper>
  );
};

export default Index;
