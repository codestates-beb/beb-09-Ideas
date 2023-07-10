import React from 'react'
import styled from 'styled-components';
import TokenInfo from './TokenInfo';
import MainPageComponent from './RankingComponent';

const SideInfoDiv = styled.div`
    height:800px;
    width:400px;
    border: 1px solid black;
    border-radius: 15px;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 30px;
    
`;

const SideInfo = () => {
  return (
    <SideInfoDiv>
        <TokenInfo/>
        <MainPageComponent/>
    </SideInfoDiv>
  )
}

export default SideInfo