import React from 'react'
import { styled } from 'styled-components';

const ProfileDiv = styled.div`
    width: 33%;
    display: inline-block;
    text-align: center;
    margin-top: 30px;
    margin-left: 30px;
    float: left;
    
`;

const WriteDayDiv = styled.div`
    float: right;
`;

const Profile = () => {
    return (
        <div>
            <ProfileDiv>
                <img src="profile.png" alt="profile" />
                <h2>Zephyr</h2>
                <span>follower : 329</span>
            </ProfileDiv>
            
        </div>
    )
}

export default Profile
