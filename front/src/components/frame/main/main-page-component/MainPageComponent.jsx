import React from 'react'
import styled from 'styled-components';
import { Pagination } from '@mui/material';

import Board from '../../../frequently_used/Board';
import { BsPencilSquare } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

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

const WriteButton = styled.div`

  float: right;
`;

const MainPageComponent = () => {
  const navigate = useNavigate();

  const goToCreateBoard = () => {
    navigate("/board/create")
  }

  return (
    <MainDiv>
        <Board/>
        <Board/>
        <Board/>
        <Pagination count={10} color="primary" variant='outlined'/>
        <WriteButton>
          <button onClick={goToCreateBoard}><BsPencilSquare size="40"/></button>
        </WriteButton>
    </MainDiv>
    
  )
}

export default MainPageComponent