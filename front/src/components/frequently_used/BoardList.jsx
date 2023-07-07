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
    border-radius: 15px;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    background-color: #58585833;
    width: 70%;
    height: 800px;
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

const BottomDiv = styled.div`
    display:flex;
    justify-content: center;
    margin-top:30px;
    & > :nth-child(2) {
        position:absolute;
        right:200px;
    }
`;

const BoardList = () => {
    const nav = useNavigate();
  const boards = useSelector((state)=>(state.boards));
  return (
     <MainDiv>
        {typeof boards !=="undefined"?
        (boards.slice(0,5).map((board)=> (
            <Board 
                id={board.id}
                title={board.title}
                category={board.category}
                created_at={board.created_at}
                thumb_up={board.thumb_up}
                thumb_down={board.thumb_down}
                view_count={board.view_count}
            />
        ))):""}
        <BottomDiv>
            <Pagination count={10} color="primary" variant='outlined'/>
            <WriteButton onClick={()=>{nav('/board/create')}}>
                <BsPencilSquare size="40"/>
            </WriteButton>
        </BottomDiv>
        
    </MainDiv>
  );
}

export default BoardList;