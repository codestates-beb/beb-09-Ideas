import { useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import MainPageComponent from "../components/frame/main/main-page-component/MainPageComponent";
import { actions1 } from "../reducer/testReducer";

const MainPageDiv = styled.div`
  width: 100%;
`;

const MainPage = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);
  const rankingData = useSelector((state) => state.rankingData);
  useEffect(() => {
    listBoards();
    getRankData();
  }, []);

  const listBoards = async () => {
    try {
      const response = await axios.get("/board/list");
      if (response.status === 200) {
        dispatch(actions1.setBoards(response.data.data));
        console.log(response.data.data);
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  // 사용자 순위, 토큰 정보 요청
  const getRankData = async () => {
    try {
      const rankDataResponse = await axios.get("/user/ranking");
      if (rankDataResponse.status === 200) {
        dispatch(actions1.setRank(rankDataResponse.data.data));
        console.log("RankData : ", rankDataResponse.data.data);
      }
      // console.log("RankData : ", rankDataResponse);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <MainPageDiv>
      <MainPageComponent boards={boards} rankingData={rankingData} />
    </MainPageDiv>
  );
};

export default MainPage;
