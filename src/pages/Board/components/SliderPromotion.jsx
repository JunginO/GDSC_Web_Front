import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";
import PreviewOnlyTitle from "../../../layout/PreviewOnlyTitle";
import ShowMore from "../../../components/ShowMore";

import { dummyPromotion } from "../../../components/dummyData";
const PromotionWrapper = styled.div`
  .top-title {
    display: flex;
    justify-content: space-between;
  }
  h1 {
    font-weight: bold;
    display: inline-block;
  }

  .box-wrapper {
    display: block;
    border: 2px solid ${COLORS.grey_light};
    border-radius: 0.5em;
    padding: 15px;
    padding-left: 20px;
    margin-bottom: 10px;
  }
  .tmp {
    text-align: center;
    font-weight: 400;
    color: ${COLORS.grey_500};
    padding: 10px;
  }
`;

const SliderPromotion = () => {
  return (
    <PromotionWrapper>
      <div className="box-wrapper">
        <div className="top-title">
          <h1>인기 게시물</h1>
        </div>
        <p className="tmp">아직 인기 게시물이 없어요</p>
      </div>
      <div className="box-wrapper">
        <div className="top-title">
          <h1>홍보 게시판</h1>
          <ShowMore link={"/board/list"} />
        </div>
        <div>
          {dummyPromotion.map((d) => (
            <PreviewOnlyTitle
              title={d.title}
              date={d.date}
              like={d.like}
              comments={d.comments}
              link={d.link}
            />
          ))}
        </div>
      </div>
    </PromotionWrapper>
  );
};

export default SliderPromotion;
