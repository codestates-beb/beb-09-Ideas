import React from "react";
import styled from "styled-components";

const TokenInfoDiv = styled.div`
  height: 200px;
  width: 400px;
  border: 0 solid black;
  border-radius: 15px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  align-items: center;
  justify-items: center;
  box-shadow: 3px 2px 2px;
  background-color: white;
  span:hover {
    background: #ececec;
    border-radius: 30px;
    cursor: pointer;
  }
`;

const TokenInfo = ({ rankingData }) => {
  // console.log("token info : ", rankingData);

  if (!rankingData) {
    // rankingData가 비어있을 때 처리
    return null; // 아무것도 렌더링하지 않음
  }

  const {
    total_user_count,
    voting_power_coefficient,
    ether_price,
    user_score_coefficient,
    mft_token_price,
  } = rankingData;

  return (
    <TokenInfoDiv>
      <div>total user : {total_user_count}</div>
      <div>
        voting power : {voting_power_coefficient} <span>❔</span>
      </div>
      <div>ETH price : ${ether_price} </div>
      <div>
        user score : {user_score_coefficient} <span>❔</span>
      </div>
      <div>MFT price : ${mft_token_price} </div>
    </TokenInfoDiv>
  );
};

export default TokenInfo;
