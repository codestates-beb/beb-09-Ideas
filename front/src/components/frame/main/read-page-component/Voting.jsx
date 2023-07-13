import React, {useState} from 'react';
import styled from '@emotion/styled'
import { Button as MuiButton } from '@mui/material';
import CateVotingInput from './CateVotingInput';
import axios from 'axios';

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
  display: block;
`;

const VoteButton = styled.div`
  display: block;
  margin-right:150px;
  float: right;
`;
const VoteViewDiv = styled.div`
  margin-top: 100px;
  display: block;
  width: 100%;
`;



const Voting = () => {
    const [cateList, setCateList] = useState(['management', 'economy', 'security', 'ai', 'blockchain', 'cloud']);
    const [isVoted, setIsVoted] = useState(false);
    const [cateInfoList, setCateInfoList] = useState([{category:'', percent:0, score:0}]);

    const handleCateChange = (event, index) => {
         const updatedCateInfoList = [...cateInfoList];
         updatedCateInfoList[index] = {...updatedCateInfoList[index], category:event.target.value}
         setCateInfoList(updatedCateInfoList);
    }

    const handlePercentChange = (event, index, votingPower) => {
        
        if(Number(event.target.value) > 100) event.target.value = 100;
         const updatedCateInfoList = [...cateInfoList];
         const percent = Number(event.target.value);
         updatedCateInfoList[index] = {...updatedCateInfoList[index], percent:percent ,score: votingPower * percent/100}
         setCateInfoList(updatedCateInfoList);
    }


    const deleteIndex = (index) => {

    const newArray = [...cateInfoList.slice(0, index), ...cateInfoList.slice(index + 1)];
      setCateInfoList(newArray); 
    };
    
    const addIndex = () => {
        setCateInfoList([...cateInfoList, {category:"", percent:0}]);
    }

    const handleSubmitAPI = async () => {
        try{
            const response = await axios.post('/board/boardScoreSave', {score_id:"", score: cateInfoList.map(obj=>{
                const {['percent']: remove, ...rest} = obj
                return rest;
            })}, {
            headers: {
                "Content-Type": "application/json"
                }
            })
            if(response.status === 200) {
                setIsVoted(!isVoted);
                alert('Success to vote');
            }
        }
        catch (err) {
            console.log(err);
        }  
        
    }

  return (
    <VoteViewDiv>
        <VotingView>
        <TitleView>
            Vote
        </TitleView>

        <VoteView>
            {cateInfoList.map((el,index)=>{
                    return (<CateVotingInput cateInfoList={cateInfoList} handleCateChange={handleCateChange} handlePercentChange={handlePercentChange} addIndex={addIndex} deleteIndex={deleteIndex} index={index} cateList={cateList}/>);
            })}
            <button onClick={()=>{console.log(cateInfoList)}}>check</button> 
            
        </VoteView>

        <VoteButton>
            {isVoted?<MuiButton variant="contained">Voted</MuiButton>:<MuiButton onClick={handleSubmitAPI} variant="contained">Vote</MuiButton>}
        </VoteButton>
        </VotingView >
    </VoteViewDiv>
  )
}

export default Voting;
