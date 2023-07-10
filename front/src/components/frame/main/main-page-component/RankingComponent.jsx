import React from 'react'
import styled from 'styled-components';
import RankingBoard from './RankingBoard';

const RankingCompoDiv = styled.div`
    height:500px;
    width:400px;
    border: 1px solid black;
    border-radius: 15px;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    
`;

const RankingComponent = () => {
  return (
    <RankingCompoDiv>
        <RankingBoard/>
    </RankingCompoDiv>
  )
}

export default RankingComponent