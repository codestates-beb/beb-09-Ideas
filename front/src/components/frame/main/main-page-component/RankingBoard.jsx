import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const RankingBoardDiv = styled.div`
  height: 100px;
  width: 370px;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  /* border: 1px dotted black;
    border-radius: 20px 5px 20px 5px; */
`;
const RankingTopDiv = styled.div`
  display: grid;
  grid-template-columns: 50px 70px 1fr;
  align-items: center;
  justify-items: center;
`;

const RankingBottomDiv = styled.div`
  display: grid;
  grid-template-columns: 50px 70px 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  span {
    font-size: 12px;
  }
`;

const CircleDiv = styled.div`
  border: 1px solid black;
  border-radius: 50px;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  div {
    margin: auto;
  }
`;

const ProfileImg = styled.img`
  border-radius: 35px;
  &:hover {
    opacity: 0.5;
  }
`;

const RankingBoard = ({
  rankingNumber,
  userId,
  userName,
  profileImageUrl,
  followerCount,
  totalScore,
  userScore, // 사용자 점수 또는 사용자의 카테고리 점수
}) => {
  console.log("사용자별 점수 : ", userScore);

  let topScores = [];
  if (totalScore !== null) {
    // 전체 조회
    // 가장 높은 점수 2개 출력
    const sortedScores = Object.entries(userScore).sort(
      (a, b) => b[1].score - a[1].score
    );
    topScores = sortedScores.slice(0, 2);
  }

  // 프로필 이미지 클릭 시 사용자 상세 페이지로 이동
  const nav = useNavigate();
  const goToProfile = (event) => {
    event.stopPropagation();
    nav(`/profile/${userId}`);
  };

  return (
    <RankingBoardDiv>
      <hr />
      <RankingTopDiv>
        <CircleDiv>
          <div>{rankingNumber}</div>
        </CircleDiv>
        <ProfileImg
          src={profileImageUrl}
          width="40px"
          height="40px"
          onClick={goToProfile}
        />
        <h4>{userName}</h4>
      </RankingTopDiv>
      <RankingBottomDiv>
        <div></div>
        <span>
          follower : <br />
          {followerCount}
        </span>
        {totalScore !== null ? (
          <>
            <span>total : {totalScore}</span>
            {topScores.map(([category, scoreData]) => (
              <span key={category}>
                {category} : {scoreData.score}
              </span>
            ))}
          </>
        ) : (
          <span>
            {userScore[0]} : {userScore[1]}
          </span>
        )}
      </RankingBottomDiv>
    </RankingBoardDiv>
  );
};

export default RankingBoard;
