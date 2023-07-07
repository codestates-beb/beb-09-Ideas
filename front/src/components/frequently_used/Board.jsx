import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BoardDiv = styled.div`
    
    padding: 15px;
    border: 0 solid black;
    height:100px;
    align-items: center;
    display:grid;
    cursor: pointer;
    background: rgb(241,248,248);
    &:hover {
        background: rgba(241,248,248,0.8);
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
    view_count, 
    management, 
    economy, 
    security, 
    ai, 
    blockchain, 
    cloud
}) => {
    const nav = useNavigate();
  return (
    <BoardDiv onClick={()=>{nav(`/board/${id}`)}}>
        {/* <CateSpan>{category}aer</CateSpan> */}
        <TopDiv>
            <ProfileImg src={img_url} width="70px" height="70px"/>
            <TitleH3>
                {title}
                <span style={{fontWeight:'normal'}}> &nbsp;{created_at} ago</span> 
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