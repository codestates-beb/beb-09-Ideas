import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineStar } from "react-icons/ai";
import { BiSolidCommentDetail, BiSolidLockOpenAlt} from 'react-icons/bi';
import { BsFillBootstrapFill, BsFillCloudsFill } from "react-icons/bs";
import { FaBookReader, FaChartLine, FaRobot } from 'react-icons/fa'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
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
`;

const BottomDiv = styled.div`
    position:absolute;
    bottom:5px;
    left:40px;
    display:grid;
    grid-template-columns: repeat(8, 1fr);
    justify-content: space-between;
    div {
        margin:2px 3px 5px 3px;
    }
`;

const ProfileImg = styled.img`
     
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
const CateDiv = styled.div`
    position:absolute;
    top:-20px;
    left:-20px;
    height: 30px;
    width: 30px;
    border-radius: 50px;
    h4{
        position:absolute;
        top:-8px;
        left:19px;
        text-align: center;
    }
`;
const CommentDiv = styled.span`
    /* font-weight: bold; */
    &:hover{
        opacity: 0.8;
    }
`;

const ImgDiv = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;



const Board = ({board}) => {
    let CategoryIcon;
    const [open, setOpen] = useState(false);
    const handleClose = (event) => {
        event.stopPropagation();
        setOpen(!open);
    }
    const nav = useNavigate();
    const goToProfile = (event)=>{
        event.stopPropagation();
        nav(`/profile/${board?.author.id}`); 
    }

    if (board.category[0] === "m"){
        CategoryIcon = <FaBookReader size= "25px"/> 
    }
    else if (board.category[0] === "e"){
        CategoryIcon = <RiMoneyDollarCircleFill size = "25px" />
    }
    else if (board.category[0] === "s"){
        CategoryIcon = <BiSolidLockOpenAlt size= "25px"/> 
    }
    else if (board.category[0] === "a"){
        CategoryIcon = <FaRobot size= "25px"/> 
    }
    else if (board.category[0] === "b"){
        CategoryIcon = <BsFillBootstrapFill size= "25px"/> 
    }
    else if (board.category[0] === "c"){
        CategoryIcon = <BsFillCloudsFill size= "25px" />
    }
  return (
    <BoardDiv onClick={()=>{nav(`/board/${board?.id}`)}}>
        <CateDiv>
            <h4>{board?.category[0].toUpperCase()}</h4> 
        </CateDiv>
        <ImgDiv>
           {CategoryIcon}
        </ImgDiv>
        <TopDiv>
            <ProfileImg src={board?.autor?.profile.image_url} width="70px" height="70px" onClick={goToProfile}/>
            <TitleH3>
                {board?.title}
                <span style={{fontWeight:'normal'}}> &nbsp;{board?.created_at}</span> 
                
            </TitleH3>
                
        </TopDiv>
        <BottomDiv>
            <div>manage: {board?.score.management.score} </div>
            <div>Economy : {board?.score.economy.score}</div>
            <div>Security : {board?.score.security.score}</div>
            <div>AI : {board?.score.ai.score}</div>
            <div>Blockchain : {board?.score.blockchain.score}</div>
            <div>Cloud : {board?.score.cloud.score}</div>
            <div>view : {board?.view_count}</div>
            <CommentDiv onClick={handleClose}><BiSolidCommentDetail size="20px"/> 87</CommentDiv>
        </BottomDiv>
        
        <CommentModal open={open} handleClose={handleClose}/>
    </BoardDiv>
  )
}

export default Board