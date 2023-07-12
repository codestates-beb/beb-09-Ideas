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
    const [cateInfoList, setCateInfoList] = useState([{category:'', percent:0}]);

    const handleCateChange = (event, index) => {
         const updatedCateInfoList = [...cateInfoList];
         updatedCateInfoList[index] = {...updatedCateInfoList[index], category:event.target.value}
         setCateInfoList(updatedCateInfoList);
    }

    const handlePercentChange = (event, index) => {
         const updatedCateInfoList = [...cateInfoList];
         updatedCateInfoList[index] = {...updatedCateInfoList[index], percent:Number(event.target.value)}
         setCateInfoList(updatedCateInfoList);
    }

    // const [cateMenuList, setCateMenuList] = useState([]);

    // const addCategory = (param) => {
    //     let sc = false; // cateList의 element가 있으면 true, 없으면 false
    //     for( let element of cateList) {
    //         for (let el of cateVotingInputList) {
    //             if(el === element) {
    //                 sc = true;
    //                 break;
    //             }
    //         }
    //         if(!sc) {
    //             setCateVotingInputList([...cateVotingInputList, element])
    //             break;
    //         }
    //     }
    // const currentIndex = cateVotingInputList.indexOf(index);
    // if (currentIndex === -1) {
    //   setCateVotingInputList([...cateVotingInputList, index]);
    // } 


//   };
    const deleteIndex = (index) => {

    const newArray = [...cateInfoList.slice(0, index), ...cateInfoList.slice(index + 1)];
      setCateInfoList(newArray); 
    };
    
    const addIndex = () => {
        setCateInfoList([...cateInfoList, {category:"", percent:0}]);
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
            
            {/* <CateVotingInput isFirstInput={true} isVisible={true}  cateList={cateList} cateVotingInputList={cateVotingInputList} setCateVotingInputList={setCateVotingInputList}/>
            {cateVotingInputList.map((el,index)=>(

                <CateVotingInput isFirstInput={false} isVisible={cateVotingInputList.includes(el)}  deleteIndex={()=>{deleteIndex(el)}} cateList={cateList} cateVotingInputList={cateVotingInputList} setCateVotingInputList={setCateVotingInputList}/>
            ))}*/}
            <button onClick={()=>{console.log(cateInfoList)}}>check</button> 
            
        </VoteView>

        <VoteButton>
            <MuiButton variant="contained">Vote</MuiButton>
        </VoteButton>
        </VotingView >
    </VoteViewDiv>
  )
}

export default Voting 
