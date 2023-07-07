import React from 'react';
import { styled } from 'styled-components';

const Profile = () => {
    const ProfileDiv = styled.div`
        text-align: center;
        margin-top: 30px;
    `;
  return (
    <ProfileDiv>
        <img src="profile.png" alt="profile" />
        <h2>Zephyr</h2>
        <span>follower : 329</span>
    </ProfileDiv>
  )
}

export default Profile