import React from 'react'
import styled from 'styled-components';
import { Pagination } from '@mui/material';

import Board from '../../../frequently_used/Board';


const MainDiv = styled.div`
    display:flex;
    flex-direction: column;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    background-color: #3333;
    width: 70%;
    height: 700px;
    padding: 30px;
    & > * + * {
        margin-top: 15px;
    }
`;


const MainPageComponent = () => {
  return (
    <MainDiv>
        <Board/>
        <Board/>
        <Board/>
        <Pagination count={10} color="primary" variant='outlined'/>
    </MainDiv>
  )
}

export default MainPageComponent