import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../components/Colors";
import { dummyMyboard } from "../../../components/dummyData";
import ShowMore from "../../../components/ShowMore";
import newIcon from "../../../assets/icon/new.svg";

const MyboardWrapper = styled.div`
  display: block;
  border: 2px solid ${COLORS.grey_light};
  border-radius: 0.5em;
  padding: 15px;
  padding-left: 20px;
  margin-bottom: 10px;
  .top-title {
    display: flex;
    justify-content: space-between;
  }
  h1 {
    font-weight: bold;
    display: inline-block;
  }
  .cate {
    font-size: 0.8em;
    display: inline-block;
  }
  .title {
    font-size: 0.8em;
    font-weight: 400;
    color: ${COLORS.grey_500};
    display: inline-block;
    margin-left: 5px;
  }
  .row {
    display: block;
    margin-top: 10px;
  }

  .new-icon {
    width: 0.8em;
    height: 0.8em;
    float: right;
  }
`;
const Myboard = () => {
  return (
    <MyboardWrapper>
      <div className="top-title">
        <h1>즐겨찾는 게시판</h1>
        <ShowMore link={"/board"} />
      </div>
      <div>
        {dummyMyboard.map((d) => (
          <a className="row">
            <p className="cate">{d.category}</p>
            <p className="title">{d.title}</p>
            {d.isNew === true ? (
              <img src={newIcon} className="new-icon" alt="신규" />
            ) : (
              ""
            )}
          </a>
        ))}
      </div>
    </MyboardWrapper>
  );
};

export default Myboard;
