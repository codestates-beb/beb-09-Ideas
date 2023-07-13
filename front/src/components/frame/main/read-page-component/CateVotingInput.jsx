import React, { useState } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const CateVotingDiv = styled.div`
    display:grid;
    grid-template-columns: 50px 1fr 140px;
    width:400px;
    margin: auto;
`;

const ButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    /* background: red; */
    button {
        height:25px;
        width:25px;
        border: 1px solid black;
        border-radius: 10px;
        background:white;
        &:hover {
            background: #dfdfdf;
        }
    }
`;

const CateVoting = styled.div`
    position:relative;
    display: flex;
    justify-content: left;
    margin-left: 10px;
    
`;

const VotingDiv = styled.div`
    display:flex;
    align-items:center;
    font-size: 12px;
    div {
        display:flex;
        flex-direction: column;
        & > span:nth-child(2) {
            color:rgb(130, 233, 130);
            font-weight:bold;
        }
    }



`;
const InputDiv = styled.div`
    span {
        position:absolute;
        right: 16px;
        top: 10px;
        font-weight: bold;
        font-size: 13px;
    }
`;

const RatioInput = styled.input`
    height:32px;
    width:55px;
    font-weight: bold;
    text-align: center;
`;

const CateSelect = styled.select`
    height:40px;
    padding: 10px;
    font-weight: bold;
    
`;

const CateVotingInput = ({cateInfoList, deleteIndex, addIndex, cateList, handleCateChange, handlePercentChange, index}) => {
    const [category, setCategory] = useState();
    const userScore = useSelector(state=>(state.myProfile?.userScore));
    
  return (
        <CateVotingDiv>
            <ButtonDiv>
                {index===0?"":<button onClick={()=>{deleteIndex(index)}}> x </button>}
                {(index + 1 === cateInfoList.length && index!==5) ? <button onClick={addIndex}> + </button> : ""}
            </ButtonDiv>
            <CateVoting>         
                <CateSelect onChange={(e)=>{handleCateChange(e, index); setCategory(e.target.value)}} name="category" class="select">
                    <option disabled selected>category</option>
                    {cateList?.map(cate=>(<option value={cate}>{cate}</option>))} 
                </CateSelect>
                <InputDiv>
                    <RatioInput type="text" onChange={(e)=>{handlePercentChange(e, index, category?userScore[category]?.voting_power:"1")}}/>
                    <span>%</span>
                </InputDiv>
            </CateVoting>
            <VotingDiv>
                <div>
                    <span>{`${category?`voting power : ${userScore[category]?.voting_power}`:""}`}</span>
                    <span>{`${cateInfoList[index].score? `🔼: ${cateInfoList[index].score}` : ''}`}</span>
                </div>
            </VotingDiv>
        </CateVotingDiv>
  )
}

export default CateVotingInput