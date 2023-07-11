import React from 'react'
import styled from 'styled-components';
import RankingBoard from './RankingBoard';

const RankingCompoDiv = styled.div`
    height:480px;
    width:400px;
    border: 0 solid black;
    border-radius: 15px;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 40px;
    overflow-y : scroll;
    box-shadow: 3px 2px 2px;
    background-color: #ffffff;
    /* .scroll::-webkit-scrollbar {
        display: none;
    } */
    
`;

const RankingComponent = () => {
  return (
    <RankingCompoDiv>
        {[1,2,3,4,5,6,7,8,9,10].map(el=>(<RankingBoard rankingNumber={el}/>))}
    </RankingCompoDiv>
  )
}

export default RankingComponent