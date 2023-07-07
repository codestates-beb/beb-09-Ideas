import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Modal, Box, Typography } from '@mui/material'
import { AiOutlineStar } from "react-icons/ai";


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
        background: rgba(255, 255, 255, 0.5);
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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Board = ({board}) => {
    const [open, setOpen] = useState(false);
    const handleClose = (event) => {
        event.stopPropagation();
        setOpen(!open);
    }
    const nav = useNavigate();
    const goToProfile = (event)=>{
        event.stopPropagation();
        nav(`/profile/${board.id}`); 
    }
  return (
    <BoardDiv onClick={()=>{nav(`/board/${board?.id}`)}}>
        <CateDiv>
            <AiOutlineStar size="50px"/>
            <h4>{board?.category[0].toUpperCase()}</h4> 
        </CateDiv>
        <TopDiv>
            <ProfileImg src={board?.autor.profile.image_url} width="70px" height="70px" onClick={goToProfile}/>
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
            <button onClick={handleClose}>comments : 87</button>
        </BottomDiv>
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
        </Modal>
    </BoardDiv>
  )
}

export default Board