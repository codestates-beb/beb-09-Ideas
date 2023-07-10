import React from 'react'
import styled from 'styled-components';
import Profile from './Profile';
import Description from './Description';
import Title from './Title';

const MainDiv = styled.div`
    display:grid;
    grid-template-columns: 1fr 8fr;
    height: 300px;
    width: 100%;
    & > div:first-child {
        
    }
    & > div:nth-child(2) {
        

    }
`;

const ProfileDescriptionMain = ({profiledata}) => {
  return (
    <MainDiv>
        <Profile profiledata={profiledata}/>
        <div>
            <Title/>
            <hr/>
            <Description/>
        </div>
    </MainDiv>
  )
}

export default ProfileDescriptionMain