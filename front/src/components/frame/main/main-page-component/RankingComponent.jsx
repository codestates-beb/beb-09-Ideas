import React from "react";
import styled from "styled-components";
import RankingBoard from "./RankingBoard";

const RankingCompoDiv = styled.div`
  height: 480px;
  width: 400px;
  border: 0 solid black;
  border-radius: 15px;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 40px;
  overflow-y: scroll;
  box-shadow: 3px 2px 2px;
  background-color: #ffffff;
  /* .scroll::-webkit-scrollbar {
        display: none;
    } */
`;

const RankingComponent = ({ rankingData }) => {
  if (!rankingData || !rankingData.user_ranking) {
    // rankingData가 비어있을 때 또는 user_ranking가 없을 때 처리
    return null; // 아무것도 렌더링하지 않음
  }
  // console.log("RankingComponent : ", rankingData.user_ranking);
  const userRankingData = rankingData.user_ranking;
  console.log("userRankingData : ", userRankingData);

  return (
    <RankingCompoDiv>
      {userRankingData.map((el, index) => (
        <RankingBoard
          key={el.user_id}
          rankingNumber={index + 1}
          userId={el.user_id}
          userName={el.user_name}
          profileImageUrl={el.profile.image_url}
          followerCount={el.followers}
          totalScore={el.total_score ? el.total_score : null}
          userScore={el.userScore ? el.userScore : el.category_score}
        />
      ))}
    </RankingCompoDiv>
  );
};

export default RankingComponent;
