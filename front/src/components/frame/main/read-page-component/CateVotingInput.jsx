import React from 'react'
import styled from 'styled-components';
import {MenuItem, FormControl, Select, InputLabel} from '@mui/material/';

const CateVoting = styled.div`
    display: ${({ isVisible, isFirstInput }) => (isFirstInput?'block':(isVisible ? 'block' : 'none'))};
    margin-bottom: 50px;

    /* display:none;    */
    `;

const CateVotingInput = ({isVisible, isFirstInput, addIndex, deleteIndex}) => {
    console.log(isVisible);
    
  return (
    <CateVoting isVisible={isVisible} isFirstInput={isFirstInput}>
          <FormControl sx={{ m: 0, minWidth: 150 }}>
            <InputLabel htmlFor="category">category</InputLabel>
            <Select defaultValue="" id="category-select" label="category">
              <MenuItem onClick={addIndex} value={"Manage"}>Manage</MenuItem>
              <MenuItem onClick={addIndex} value={"Economy"}>Economy</MenuItem>
              <MenuItem onClick={addIndex} value={"Security"}>Security</MenuItem>
              <MenuItem onClick={addIndex} value={"AI"}>AI</MenuItem>
              <MenuItem onClick={addIndex} value={"Blockchain"}>Blockchain</MenuItem>
              <MenuItem onClick={addIndex} value={"Cloud"}>Cloud</MenuItem>
            </Select>
          </FormControl>
            <input type="text" />
            {isFirstInput?"":<button onClick={deleteIndex}> x </button>}
    </CateVoting>
  )
}

export default CateVotingInput