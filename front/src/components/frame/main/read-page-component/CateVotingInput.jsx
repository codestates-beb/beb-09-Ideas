import React, {useState} from 'react'
import styled from 'styled-components';
import {MenuItem, FormControl, Select, InputLabel} from '@mui/material/';

const CateVoting = styled.div`
    display: ${({ isVisible, isFirstInput }) => (isFirstInput?'block':(isVisible ? 'block' : 'none'))};
    margin-bottom: 20px;

    button {
        position:absolute;
        border: 0;
        font-size: 15px;
        background: transparent;
        &:hover {
            background: #f1f1f1;
        }
    }
    `;

const RatioInput = styled.input`
    height:35px;
    width:45px;
`;

const CateVotingInput = ({isVisible, isFirstInput, addIndex, deleteIndex, cateList, cateVotingInputList, setCateVotingInputList}) => {
     const handleCategoryChange = (event) => {
    // 선택된 옵션에 따른 동작 수행
    if (cateVotingInputList.includes(event.target.value))  {
        setCateVotingInputList(cateVotingInputList.filter(item=>(item !== event.target.value)));
    } else {
        setCateVotingInputList([...cateVotingInputList, event.target.value]);
    }
    
  };
    
    
  return (
        <>
            <select onChange={handleCategoryChange} name="category" class="select">

                {cateList?.filter(item => {
                     if(cateVotingInputList.length === 0) return item;
                     else {
                         for(let element of cateVotingInputList) {
                             return item !== element;
                         }
                     }}).map(el => <option value={el}>{el}</option>)}
            </select>
            <RatioInput type="text" />
            {isFirstInput?"":<button onClick={deleteIndex}> x </button>}
        </>
    // <CateVoting isVisible={isVisible} isFirstInput={isFirstInput}>
    //       <FormControl size='small' sx={{ m: 0, minWidth: 150 }}>
    //         <InputLabel size='small' htmlFor="category">category</InputLabel>
    //         <Select defaultValue="" id="category-select" label="category">
    //             {cateList?.filter(item => {
    //                 if(cateVotingInputList.length === 0) return item;
    //                 else {
    //                     for(let element of cateVotingInputList) {
    //                         return item !== element;
    //                     }
    //                 }}).map(el => <MenuItem onClick={} value={el}>{el}</MenuItem>)}

    //         </Select>
    //         <MyMenu/>
    //       </FormControl>
    
    // </CateVoting>
  )
}

export default CateVotingInput