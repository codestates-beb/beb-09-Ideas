import React from 'react';
import { styled } from 'styled-components';

const Profile = ({profiledata}) => {
    const ProfileDiv = styled.div`
        text-align: center;
        margin-top: 30px;
    `;
    console.log("데이터",profiledata);

  return (
    <ProfileDiv>
        <img src="profile.png" alt="profile" />
        <h2></h2>
        <span>follower : 329</span>
    </ProfileDiv>
  )
}

export default Profile