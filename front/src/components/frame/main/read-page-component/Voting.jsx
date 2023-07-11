import React, {useState} from 'react';
import styled from '@emotion/styled'
import { Button as MuiButton } from '@mui/material';
import CateVotingInput from './CateVotingInput';

const VotingView = styled.div`
  width: 100%;
  margin: 5px;
`;

const TitleView = styled.div`
  display: block;
  text-align: left;
  margin: 25px;
  padding: 10px;
  font-size: 20px;
  font-weight: bolder;  
`;

const VoteView = styled.div`
    
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: column;
  flex-wrap: wrap; */
  
  gap: 15px;
  /* height: 500px; */
`;

const VoteButton = styled.div`
  display: block;
  margin-right:150px;
  float: right;
`;



const Voting = () => {
    const [cateVotingInputList, setCateVotingInputList] = useState([]);
    console.log(cateVotingInputList);
    const addIndex = (index) => {
    const currentIndex = cateVotingInputList.indexOf(index);
    if (currentIndex === -1) {
      setCateVotingInputList([...cateVotingInputList, index]);
    } 
  };
    const deleteIndex = (index) => {
    const currentIndex = cateVotingInputList.indexOf(index);
    if (currentIndex !== -1){
      setCateVotingInputList(cateVotingInputList.filter((item) => item !== index));
    } 
    };
    

  return (
    <VotingView>
      <TitleView>
        Vote
      </TitleView>

      <VoteView>
        <CateVotingInput isFirstInput={true} isVisible={cateVotingInputList.includes(1)} addIndex={()=>{addIndex(2)}} deleteIndex={()=>{deleteIndex(1)}}/>
        <CateVotingInput isFirstInput={false} isVisible={cateVotingInputList.includes(2)} addIndex={()=>{addIndex(3)}} deleteIndex={()=>{deleteIndex(2)}}/>
        <CateVotingInput isFirstInput={false} isVisible={cateVotingInputList.includes(3)} addIndex={()=>{addIndex(4)}} deleteIndex={()=>{deleteIndex(3)}}/>
        <CateVotingInput isFirstInput={false} isVisible={cateVotingInputList.includes(4)} addIndex={()=>{addIndex(5)}} deleteIndex={()=>{deleteIndex(4)}}/>
        <CateVotingInput isFirstInput={false} isVisible={cateVotingInputList.includes(5)} addIndex={()=>{addIndex(6)}} deleteIndex={()=>{deleteIndex(5)}}/>
        <CateVotingInput isFirstInput={false} isVisible={cateVotingInputList.includes(6)} addIndex={()=>{addIndex(7)}} deleteIndex={()=>{deleteIndex(6)}}/>
      </VoteView>

      <VoteButton>
        <MuiButton variant="contained">Vote</MuiButton>
      </VoteButton>
    </VotingView >
  )
}

export default Voting 
