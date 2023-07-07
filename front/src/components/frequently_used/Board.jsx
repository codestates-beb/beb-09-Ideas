import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BoardDiv = styled.div`
    
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
    
`;

const TopDiv = styled.div`
    display:grid;
    grid-template-columns: 70px 1fr;
`;

const BottomDiv = styled.div`
    display:grid;
    grid-template-columns: repeat(8, 1fr);
    justify-content: space-between;
    div {
        margin:2px 3px 5px 3px;
    }
`;

const ProfileImg = styled.img`
    z-index: 10;
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
// const CateSpan = styled.span`
//     font-weight: bold;
// `;

const Board = ({
    id, 
    title, 
    category,
    img_url,
    created_at, 
    user_name,
    autorId,
    view_count, 
    management, 
    economy, 
    security, 
    ai, 
    blockchain, 
    cloud
}) => {
    const nav = useNavigate();
    const goToProfile = (event)=>{
        event.stopPropagation();
        nav(`/profile/${autorId}`); 
    }
  return (
    <BoardDiv onClick={()=>{nav(`/board/${id}`)}}>
        {/* <CateSpan>{category}aer</CateSpan> */}
        <TopDiv>
            <ProfileImg src={img_url} width="70px" height="70px" onClick={goToProfile}/>
            <TitleH3>
                {title}
                <span style={{fontWeight:'normal'}}> &nbsp;{created_at}</span> 
            </TitleH3>
        </TopDiv>
        <BottomDiv>
            <div>management : {management}</div>
            <div>Economy : {economy}</div>
            <div>Security : {security}</div>
            <div>AI : {ai}</div>
            <div>Blockchain : {blockchain}</div>
            <div>Cloud : {cloud}</div>
            <div>view : {view_count}</div>
            <div>comments : 87</div>
        </BottomDiv>
    </BoardDiv>
  )
}

export default Board