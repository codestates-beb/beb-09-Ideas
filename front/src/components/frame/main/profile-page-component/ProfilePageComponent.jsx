import React from 'react'
import styled from 'styled-components'
import ProfileDescriptionMain from './profile-description/ProfileDescriptionMain';
import ScoreMain from './score/ScoreMain';
import PostMain from './post/PostMain';


const ProfileDiv = styled.div`
    margin:auto;
    width: 75%;
    display: block;
    margin-bottom: 0px;
    
    
`;

const ProfilePageComponent = () => {
    
    
  return (
    <ProfileDiv >
        <ProfileDescriptionMain />
        <ScoreMain />
        <PostMain />
    </ProfileDiv>    
  )
}

export default ProfilePageComponent;
