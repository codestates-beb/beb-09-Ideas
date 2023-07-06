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
        background: red;
    }
    & > div:nth-child(2) {
        background: #dbdbe0;

    }
`;

const ProfileDescriptionMain = () => {
  return (
    <MainDiv>
        <Profile/>
        <div>
            <Title/>
            <hr/>
            <Description/>
        </div>
    </MainDiv>
  )
}

export default ProfileDescriptionMain