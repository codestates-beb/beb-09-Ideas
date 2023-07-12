import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MainPageComponent from "../components/frame/main/main-page-component/MainPageComponent";
import { actions1 } from "../reducer/testReducer";

const CategoryBoardDiv = styled.div`
  width: 100%;
`;

const CategoryBoard = () => {
  const { category } = useParams();
  const boards = useSelector((state) => state.boards);
  const rankingData = useSelector((state) => state.rankingData);
  const dispatch = useDispatch();
  useEffect(() => {
    getAPICategoryBoard();
    getCategoryRankData();
  }, [category]);

  const getAPICategoryBoard = async () => {
    try {
      const response = await axios.get(`/board/list/${category}`);
      if (response.status === 200) {
        console.log(response);
        dispatch(actions1.setBoards(response.data.data));
      }
    } catch (err) {
      console.log(err);
    }
  };

  // 카테고리별 사용자 순위, 토큰 정보 요청
  const getCategoryRankData = async () => {
    try {
      const rankDataResponse = await axios.get(`/user/ranking/${category}`);
      if (rankDataResponse.status === 200) {
        dispatch(actions1.setRank(rankDataResponse.data.data));
        // console.log("categoryRankData : ", rankDataResponse.data.data);
      }
      // console.log("categoryRankData : ", rankDataResponse);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CategoryBoardDiv>
      <MainPageComponent boards={boards} rankingData={rankingData} />
    </CategoryBoardDiv>
  );
};

export default CategoryBoard;
