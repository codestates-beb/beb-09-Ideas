import React from 'react'
import styled from 'styled-components';
import { BsPencilSquare } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { Pagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Board from './Board';

const MainDiv = styled.div`
    display:flex;
    flex-direction: column;
    overflow: hidden;
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
    cursor: pointer;
    float: right;
    &:hover {
        opacity: 0.7;
    }
`;

const BoardList = () => {
    const nav = useNavigate();
  const boards = useSelector((state)=>(state.boards));
  console.log(boards);
  return (
     <MainDiv>
        {boards.map((board)=> (
            <Board 
                id={board.id}
                title={board.title}
                category={board.category}
                created_at={board.created_at}
                thumb_up={board.thumb_up}
                thumb_down={board.thumb_down}
                view_count={board.view_count}
            />
        ))}
        <Pagination count={10} color="primary" variant='outlined'/>
        <WriteButton onClick={()=>{nav('/board/create')}}>
          <BsPencilSquare size="40"/>
        </WriteButton>
    </MainDiv>
  );
}

export default BoardList;