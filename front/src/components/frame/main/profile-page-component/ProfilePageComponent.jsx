import React, {useState} from 'react'
import styled from 'styled-components'
import ProfileDescriptionMain from './profile-description/ProfileDescriptionMain';
import ScoreMain from './score/ScoreMain';
import PostMain from './post/PostMain';
import VotingPowerMain from "./voting-power/VotingPowerMain";
import {Button} from "@mui/material";

const ProfileDiv = styled.div`
    margin:auto;
    width: 75%;
    display: block;
    margin-bottom: 0px;
    
    
`;

const ProfilePageComponent = () => {
    const [toggle, setToggle] = useState(true);

    const handleToggle= () =>{
        setToggle(!toggle);
    }
  return (
    <ProfileDiv >
        <ProfileDescriptionMain />
        <Button onClick={handleToggle}> change </Button>
        {toggle ? <ScoreMain/> : <VotingPowerMain/>}
        <PostMain />
    </ProfileDiv>    
  )
}

export default ProfilePageComponent;
