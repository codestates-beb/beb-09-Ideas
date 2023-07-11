import React from 'react'
import styled from 'styled-components';


const TokenInfoDiv = styled.div`
    height:200px;
    width:400px;
    border: 0 solid black;
    border-radius: 15px;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 40px;
    display:grid;
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

const TokenInfo = () => {
  return (
    <TokenInfoDiv>
        <div>total user : 1,823</div>
        <div>voting power : 2.7 <span>❔</span></div>
        <div>ETH price : $205 </div>
        <div>user score : 1.8 <span>❔</span></div>
        <div>MFT price : $0.005 </div>
    </TokenInfoDiv>
  )
}

export default TokenInfo