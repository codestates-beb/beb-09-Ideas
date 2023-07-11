import React from 'react';
import { styled } from 'styled-components';

const ProfileDiv = styled.div`
        text-align: center;
        margin-top: 30px;
    `;


const Profile = ({profiledata}) => {
    
    //console.log("데이터 확인", profiledata);
  return (
    <ProfileDiv>
        <img src={profiledata?.id?.data.userData.profile.image_url} alt="profile"  style={{ width: '80px', height: 'auto' }}/>
        
        <h2>{profiledata?.id?.data.userData.user_name} </h2>
      
        <span>followers: {profiledata?.id?.data.userData.followers}</span>
    </ProfileDiv>
  )
}

export default Profile