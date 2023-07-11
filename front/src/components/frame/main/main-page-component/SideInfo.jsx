import React from 'react'
import styled from 'styled-components';
import TokenInfo from './TokenInfo';
import RankingComponent from './RankingComponent';

const SideInfoDiv = styled.div`
    height:800px;
    width:400px;
    border: 0 solid black;
    border-radius: 15px;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 30px;
    background-color: #61616133;
`;

const Myh2 = styled.h2`
    margin-bottom: 0;
    margin-top: 0;
`;



const SideInfo = () => {
  return (
    <SideInfoDiv>
        <Myh2>Token Info</Myh2>
        <TokenInfo/>
        <Myh2>Rank</Myh2>
        <RankingComponent/>
    </SideInfoDiv>
  )
}

export default SideInfo