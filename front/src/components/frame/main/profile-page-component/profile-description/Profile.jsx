import React from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';

const ProfileDiv = styled.div`
        text-align: center;
        margin-top: 30px;
    `;


const Profile = () => {
    const userData = useSelector(state=>(state.userProfile.userData));
  return (
    <ProfileDiv>
        <img src={userData?.profile.image_url} alt="profile"  style={{ width: '80px', height: 'auto' }}/>
        <h2>{userData?.user_name} </h2>
        <span>followers: {userData?.followers}</span>
    </ProfileDiv>
  )
}

export default Profile