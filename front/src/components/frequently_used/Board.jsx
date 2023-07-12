import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineStar } from "react-icons/ai";
import { BiSolidCommentDetail, BiSolidLockOpenAlt } from 'react-icons/bi';
import { BsFillBootstrapFill, BsFillCloudsFill, BsPersonWorkspace } from "react-icons/bs";
import { FaBookReader, FaChartLine, FaRobot } from 'react-icons/fa'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { GrOverview } from 'react-icons/gr'
import CommentModal from './CommentModal';
import { Modal, Box, Typography } from '@mui/material';


const BoardDiv = styled.div`
    position:relative;
    padding: 15px;
    border: 1 solid black;
    border-radius: 15px;
    height:100px;
    align-items: center;
    display:grid;
    cursor: pointer;
    background: rgb(255, 255, 255);
    &:hover {
        background: rgba(255, 255, 255, 0.85);
    }
    box-shadow: 3px 2px 2px;
    
`;

const TopDiv = styled.div`
    position:absolute;
    top:15px;
    left: 20px;
    display:grid;
    grid-template-columns: 70px 1fr;
    align-items: center;
    justify-items: center;
`;

const BottomDiv = styled.div`
    position:absolute;
    bottom:5px;
    left:65px;
    display:grid;
    grid-gap: 45px;
    grid-template-columns: repeat(8, 1fr);
    justify-content: space-between;
    div {
        margin:2px 3px 5px 3px;
    }
`;

const ProfileImg = styled.img`
    align-items: center;
    justify-items: center;
    position:block;
    border-radius: 35px;
    &:hover {
        opacity: 0.5;
    }
`;

const TitleH3 = styled.h3`
    padding-left: 20px;
    h3 {
        float:left;
    }
`;

const CommentDiv = styled.span`
    /* font-weight: bold; */
    &:hover{
        opacity: 0.8;
    }
`;



const Board = ({ board }) => {
    let CategoryIcon;
    const [open, setOpen] = useState(false);
    const handleClose = (event) => {
        event.stopPropagation();
        setOpen(!open);
    }
    const nav = useNavigate();
    const goToProfile = (event) => {
        event.stopPropagation();
        nav(`/profile/${board?.author.id}`);
    }
    try {
        if (board.category[0] === "m") {
            CategoryIcon = <FaBookReader size="25px" />
        }
        else if (board.category[0] === "e") {
            CategoryIcon = <RiMoneyDollarCircleFill size="25px" />
        }
        else if (board.category[0] === "s") {
            CategoryIcon = <BiSolidLockOpenAlt size="25px" />
        }
        else if (board.category[0] === "a") {
            CategoryIcon = <FaRobot size="25px" />
        }
        else if (board.category[0] === "b") {
            CategoryIcon = <BsFillBootstrapFill size="25px" />
        }
        else if (board.category[0] === "c") {
            CategoryIcon = <BsFillCloudsFill size="25px" />
        }
    } catch (eror) {
        console.log(eror);
    }

    return (
        <BoardDiv onClick={() => { nav(`/board/${board?.id}`) }}>
            <TopDiv>
                <div>
                    <ProfileImg src={board?.author?.profile.image_url} width="40px" height="40px" onClick={goToProfile} />
                    <div style={{ fontSize: '13px'  }}>{board?.author.user_name}</div>
                </div>
                <TitleH3>
                    <span style={{ marginRight: '5px' }}>{CategoryIcon}</span>{board?.title}
                    <span style={{ fontWeight: 'normal' }}> &nbsp;{board?.created_at}</span>
                </TitleH3>
            </TopDiv>
            <BottomDiv>
                <div><FaBookReader size="25px" /> : {board?.score.management.score} </div>
                <div><RiMoneyDollarCircleFill size="25px" /> : {board?.score.economy.score}</div>
                <div><BiSolidLockOpenAlt size="25px" />  : {board?.score.security.score}</div>
                <div><FaRobot size="25px" />  : {board?.score.ai.score}</div>
                <div><BsFillBootstrapFill size="25px" />  : {board?.score.blockchain.score}</div>
                <div><BsFillCloudsFill size="25px" />  : {board?.score.cloud.score}</div>
                <div><BsPersonWorkspace size={"25px"} /> : {board?.view_count}</div>
                <CommentDiv onClick={handleClose}><BiSolidCommentDetail size="25px" /> {board?.comments.length}</CommentDiv>
            </BottomDiv>

            <CommentModal open={open} handleClose={handleClose} comments={board?.comments} />
        </BoardDiv>
    )
}

export default Board