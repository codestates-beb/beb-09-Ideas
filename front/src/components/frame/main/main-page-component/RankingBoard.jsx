import React from 'react'
import styled from 'styled-components';

const RankingBoardDiv = styled.div`
    height:100px;
    width:370px;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 15px;
    /* border: 1px dotted black;
    border-radius: 20px 5px 20px 5px; */
`;
const RankingTopDiv = styled.div`
      display:grid;
    grid-template-columns: 50px 70px 1fr;
    align-items: center;
    justify-items: center;
`;

const RankingBottomDiv = styled.div`
      display:grid;
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
    display:flex;
    align-items: center;
    div {
        margin:auto;
    }
    
`;

const RankingBoard = ({rankingNumber}) => {
  return (
    <RankingBoardDiv>
        <hr/>
        <RankingTopDiv>
            <CircleDiv><div>{rankingNumber}</div></CircleDiv>
            <img src="" alt="img" />
            <h4>user name</h4>
        </RankingTopDiv>
        <RankingBottomDiv>
            <div></div>
            <span>follower : <br/>300</span>
            <span>total : 181</span>
            <span>AI :57</span>
            <span>Security : 32</span>
        </RankingBottomDiv>
    </RankingBoardDiv>
  )
}

export default RankingBoard