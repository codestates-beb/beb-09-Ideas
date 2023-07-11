import React, {useState} from 'react'
import styled from 'styled-components';
import {MenuItem, FormControl, Select, InputLabel} from '@mui/material/';

import MyMenu from '../../../frequently_used/MyMenu';

const CateVoting = styled.div`
    display: ${({ isVisible, isFirstInput }) => (isFirstInput?'block':(isVisible ? 'block' : 'none'))};
    margin-bottom: 20px;

    /* display:none;    */
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

const CateVotingInput = ({isVisible, isFirstInput, addIndex, deleteIndex, cateList, cateVotingInputList}) => {
     
    const testFunction = (e)=>{
        // console.log(Object.keys(e.target));
        console.log(e.target)
    }
    
    
  return (
    <CateVoting isVisible={isVisible} isFirstInput={isFirstInput}>
          <FormControl size='small' sx={{ m: 0, minWidth: 150 }}>
            <InputLabel size='small' htmlFor="category">category</InputLabel>
            <Select defaultValue="" id="category-select" label="category">
                {cateList?.filter(item => {
                    if(cateVotingInputList.length === 0) return item;
                    else {
                        for(let element of cateVotingInputList) {
                            return item !== element;
                        }
                    }}).map(el => <MenuItem onClick={testFunction} ve={el} value={el}>{el}</MenuItem>)}

            </Select>
            <MyMenu/>
          </FormControl>
            <RatioInput type="text" />
            {isFirstInput?"":<button onClick={deleteIndex}> x </button>}
    </CateVoting>
  )
}

export default CateVotingInput