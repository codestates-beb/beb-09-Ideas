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

`;

const RatioInput = styled.input`
    height:32px;
    width:45px;
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
                <div>
                    <RatioInput type="text" onChange={(e)=>{handlePercentChange(e, index)}}/>
                    <span>%</span>
                </div>
            </CateVoting>
            <VotingDiv>
                <span>{`voting power : ${userScore?userScore[category].score:"0"}`}</span>
            </VotingDiv>
        </CateVotingDiv>
  )
}

export default CateVotingInput