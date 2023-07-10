import React from 'react'
import styled from 'styled-components';

const RankingBoardDiv = styled.div`
    height:100px;
    width:370px;
    border: 1px solid black;
    border-radius: 15px;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    
`;

const CircleDiv = styled.div`
    border: 1px solid black;
    border-radius: 50px;
    height: 30px;
    width: 30px;
    span {
        margin: auto;
    }
`;

const RankingBoard = () => {
  return (
    <RankingBoardDiv>
        <CircleDiv><span>1</span></CircleDiv>
    </RankingBoardDiv>
  )
}

export default RankingBoard