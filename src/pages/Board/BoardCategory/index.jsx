import react from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import BoardTop from "../../BoardDetail/components/BoardTop";
import BoardList from "../../BoardDetail/components/BoardList";
import { COLORS } from "../../../components/Colors";
import pencil from "../../../assets/icon/pencil.svg";

const MainWrapper = styled.div`
  width: 100%;

  .pencil-icon {
    width: 10px;
    margin: 5px;
  }

  .write-button {
    background-color: ${COLORS.grey_300};
    padding: 8px;
    bottom: 10px;
    border-radius: 15px;
    position: fixed;
    bottom: 0px;
    left: 50%;
    margin-bottom: 20px;
  }
`;
const Index = ({ match }) => {
  const [title, setTitle] = useState(0);
  const [boardData, setboardData] = useState([]);
  useEffect(() => {
    const category = match.params.category;

    if (parseInt(category) === 1) {
      setTitle("자유게시판");
    } else if (parseInt(category) === 2) {
      setTitle("비밀게시판");
    }

    const fetchData = async () => {
      const category = match.params.category;
      const result = await axios(`/api/board?category=${category}`);
      setboardData(result.data.data);
    };
    fetchData();
  }, []);
  const handleClick = (e) => {
    window.location.href = "/board/post";
  };

  return (
    <MainWrapper>
      <BoardTop data={title} />
      <div className="box-wrapper">
        {boardData === 0 ? (
          <p>암것두없다</p>
        ) : (
          boardData.map((d) => (
            <BoardList
              title={d.title}
              comments={d.comments}
              like={d.like}
              contents={d.content}
              link={d.detaillink}
            />
          ))
        )}
      </div>
      <button class="write-button" onClick={handleClick}>
        <img src={pencil} alt="연필 아이콘" class="pencil-icon" />
        <span class="write-text">글 쓰기</span>
      </button>
    </MainWrapper>
  );
};
export default Index;
