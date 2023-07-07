import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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

const Board = () => {
    const navigate = useNavigate();

  return (
    <BoardDiv onclick={navigate("/board/:1")}>
        <TopDiv>
            <ProfileImg src='profile.png' width="70px" height="70px"/>
            <TitleH3>
                Recurrent Neural NetWorks Explained with a Real Life Example and Python Code
                <span style={{fontWeight:'normal'}}> &nbsp;2 days ago</span> 
                
            </TitleH3>
        </TopDiv>
        <BottomDiv>
            <div>management : 38</div>
            <div>Economy : 8</div>
            <div>Security : 22</div>
            <div>AI : 113</div>
            <div>Blockchain : 0</div>
            <div>Cloud : 0</div>
            <div>view : 3,205</div>
            <div> : 87</div>
        </BottomDiv>

        
    </BoardDiv>
  )
}

export default Board