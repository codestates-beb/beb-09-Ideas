import React from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux'; 


const ProfileDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin-top: 30px;
    margin:auto;
    height: 100px;
    
    img {
        border-radius: 40px;
        float:left;
        margin-right:10px;
    }
    div {
        float:right;
    }
    
`;

const LeftDiv = styled.div`
    display:flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    width:180px;
    height:80px;
    border-radius: 30px;

    &:hover{
        cursor: pointer;
        background: rgba(210,210,210,0.2);
    }
    h4{
        margin:0;
        margin-bottom:5px;
        font-size: 18px;
        padding: 0;
    }
    div > span {
        font-size: 14px;
    }
`;
const RightDiv = styled.div`
    display:flex;
    align-items: center;
    justify-items: center;
    width:200px;
    justify-content: space-around;
    div > button {
        border: 0;
        border-radius: 30px;
        background: transparent;
        width:30px;
        height:30px;
        font-size: 20px;
        margin: auto;
        padding:0;
        &:hover {
            background: rgba(210,210,210,0.2);
            cursor: pointer;
        }
    }
    div > p {
        font-size: 20px;
    }
    div {
        display:flex;
    }
`;

const Profile = () => {
    const nav = useNavigate();
    const board = useSelector(state=>(state?.board));
    return (
        <ProfileDiv>
            <LeftDiv onClick={()=>{nav(`/profile/id`)}}>
                <img src={board?.author?.profile.image_url} alt="profile" width="50px" />
                <div>
                    <h4>{board?.author?.user_name}</h4>
                    <span>follower : 328</span>
                </div>
            </LeftDiv>
            <RightDiv>
                <div>
                    <button>👍</button>
                    <p style={{color:'blue'}}>{board?.thumb_up}</p>
                </div>
                <div>
                    <button>👎</button>
                    <p style={{color:'red'}}>{board?.thumb_down}</p>
                </div>
            </RightDiv>
        </ProfileDiv>
        
        
    )
}

export default Profile
