import React from 'react'
import styled from 'styled-components'
import ProfileDescriptionMain from './profile-description/ProfileDescriptionMain';
import ScoreMain from './score/ScoreMain';
import PostMain from './post/PostMain';

const ProfileDiv = styled.div`
    margin-top:100px;
    margin-left:200px;
    /* background: #bebeec; */
    height:2000px;
    width: 1300px;
`;

const ProfilePageComponent = ({profiledata}) => {
  return (
    <ProfileDiv >
        <ProfileDescriptionMain profiledata={profiledata}/>
        <ScoreMain profiledata={profiledata}/>
        <PostMain profiledata={profiledata}/>
    </ProfileDiv>    
  )
}

export default ProfilePageComponent
