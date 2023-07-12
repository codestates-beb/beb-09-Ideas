import React from 'react'
import styled from '@emotion/styled';
import Title from './Title';
import Profile from './Profile';
import Description from './Description';
import TopStatus from './TopStatus';
import Voting from './Voting';
import CommentList from './CommentList';

const ReadDiv = styled.div`
    display:block;
    flex-direction: column;
    margin: auto;
    margin-top: 40px;
    margin-bottom: auto;
    background-color: #3333;
    width: 55%;
    height: auto;
    padding: 30px;
    border-radius: 15px;

    & > * + * {
        margin-top: 15px;
    }
`;

const ReadViewDiv = styled.div`
  text-align: center;
  margin-top: 35px;
  margin-bottom: auto;
  margin: 15px;
  background-color: white;
  border-radius: 15px;
  padding: 50px;
  
`;




const ReadPageComponent = () => {
  
  
  return (

    <ReadDiv>
      <ReadViewDiv>
        <Title />
        <Profile />
        <Description />
        <hr />
        <TopStatus />
        <Voting />
        <CommentList />
      </ReadViewDiv>
    </ReadDiv>

  )
}

export default ReadPageComponent
