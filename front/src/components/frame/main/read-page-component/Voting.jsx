import React, {useState} from 'react';
import styled from '@emotion/styled'
import { Button as MuiButton } from '@mui/material';
import CateVotingInput from './CateVotingInput';
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux';

import BasicModal from '../../../frequently_used/BasicModal';
import { actions1 } from '../../../../reducer/testReducer';

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

  display: flex;
  margin-right:50px;
  margin-top: 20px;
  float: right;
  align-items: center;
`;
const VoteViewDiv = styled.div`
  margin-top: 100px;
  display: block;
  width: 100%;
`;

const LoginFirstDiv = styled.div`
    width:60%;
    height:220px;
    border-radius: 15px;
    border:1px dotted black;
    display:flex;
    justify-content: center;
    align-items:center;
    margin: auto;
    margin-top:100px;
    background-image: linear-gradient(to right, #ffffff, #eef6f8);
`

const CancelVoteButton = styled.div`
    border:0;
    border-radius:10px;
    width:15px;
    height:15px;
    /* background: red; */
    &:hover{
        background: silver;
    }
`



const Voting = () => {
    const dispatch = useDispatch();
    const [cateList, setCateList] = useState(['management', 'economy', 'security', 'ai', 'blockchain', 'cloud']);
    const [cateInfoList, setCateInfoList] = useState([{category:'', percent:0, score:0}]);
    const [isOpenModal , setIsOpenModal] = useState(false);
    const myProfile = useSelector(state=>(state.myProfile));
    const board_score = useSelector(state=>(state.board?.board_score?._id));
    
    console.log(myProfile);
    const handleModalToggle = ()=> {
        setIsOpenModal(!isOpenModal);
    }
    
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
            const response = await axios.post('/board/boardScoreSave', {score_id:board_score, score: cateInfoList.map(obj=>{
                const {['percent']: remove, ...rest} = obj
                return rest;
            })}, {
            headers: {
                "Content-Type": "application/json"
                }
            })
            if(response.status === 200) {
                console.log(response.data);
                dispatch(actions1.toggleIsCommentVoted(true));
                setIsOpenModal(!isOpenModal);
                dispatch(actions1.setBoardScore(response.data.boardScore));
            }
            // console.log('------------------------');
            // console.log(response);
        }
        catch (err) {
            console.log(err);
            alert(err);
        }  
        
    }

    const handleVoteCancle = async () => {
        try{
            const response = await axios.get('/');
            if(response.status(200)){
                dispatch(actions1.toggleIsCommentVoted(false));
            }
        }
        catch(err) {
            console.log(err);
        }

    }

    if(!Object.keys(myProfile).length) {
        return (
        <LoginFirstDiv>
            Please Login first to vote
        </LoginFirstDiv>)
    }

  return (
    <VoteViewDiv>
        <VotingView>
        <TitleView>
            Vote
        </TitleView>

        <VoteView>
            {cateInfoList.map((el,index)=>{
                    return (<CateVotingInput handleSubmitAPI={handleSubmitAPI} cateInfoList={cateInfoList} handleCateChange={handleCateChange} handlePercentChange={handlePercentChange} addIndex={addIndex} deleteIndex={deleteIndex} index={index} cateList={cateList}/>);
            })}
            {/* <button onClick={()=>{console.log(cateInfoList)}}>check</button>  */}
        </VoteView>

        <VoteButton>
            {myProfile?.isCommentVoted?<MuiButton disabled variant="contained">Voted</MuiButton>:<MuiButton onClick={handleModalToggle} variant="contained">Vote</MuiButton>}
            <CancelVoteButton onClick={handleVoteCancle}></CancelVoteButton>
        </VoteButton>
        </VotingView >
        <BasicModal handleModalToggle={handleModalToggle} isOpenModal={isOpenModal} handleSubmitAPI={handleSubmitAPI} />
    </VoteViewDiv>
  )
}

export default Voting;
