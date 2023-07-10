import React from 'react'
import styled from 'styled-components';


const TokenInfoDiv = styled.div`
    height:200px;
    width:400px;
    border: 1px solid black;
    border-radius: 15px;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 40px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
`;

const TokenInfo = () => {
  return (
    <TokenInfoDiv>
        <div>total user : </div>
        <div>voting power coefficient : </div>
        <div>ETH price : $ </div>
        <div>user score coefficient : </div>
        <div>MFT price : $ </div>
    </TokenInfoDiv>
  )
}

export default TokenInfo