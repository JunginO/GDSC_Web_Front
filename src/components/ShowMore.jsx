import React from "react";
import styled from "styled-components";
import { COLORS } from "./Colors";
import RightImg from "../assets/vector/vectorRightRed.svg";
import { Link } from "react-router-dom";

const ShowMoreWrapper = styled.div`
    display: inline-block;

    .more{
    font-size:0.8em;
    font-weight: 400;
    color: ${COLORS.red};
    }

    img {
        width: 10px;
        height:10px;
        vertical-align: middle;
    }
`
const ShowMore = () => {
    return (
        <ShowMoreWrapper>
            <Link to="/board">
                <span className="more">더 보기</span>
                <img src={RightImg} alt="더보기" />
            </Link>
        </ShowMoreWrapper>
    )
};

export default ShowMore;