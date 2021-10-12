import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../components/Colors";
import { dummyHot } from "../../../components/dummyData";
import ShowMore from "../../../components/ShowMore";
import PreviewOnlyTitle from "../../../layout/PreviewOnlyTitle";

const PopularWrapper = styled.div`
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
  img {
    width: 11px;
    height: 11px;
  }
`;

const Popular = () => {
  return (
    <PopularWrapper>
      <div className="top-title">
        <h1>HOT 게시물</h1>
        <ShowMore link={"/board"} />
      </div>
      <div>
        {dummyHot.map((d) => (
          <PreviewOnlyTitle
            title={d.title}
            date={d.date}
            like={d.like}
            comments={d.comments}
          />
        ))}
      </div>
    </PopularWrapper>
  );
};
export default Popular;
