import React from 'react'
import styled from '@emotion/styled';
import Title from './Title';
import Profile from './Profile';
import Description from './Description';
import Daycheck from './Daycheck';
import ThumbsUp from './ThumbsUp';
import TopStatus from './TopStatus';
import Voting from './Voting';
import Comment from './Comment';

const ReadDiv = styled.div`
    display:block;
    flex-direction: column;
    margin: auto;
    margin-top: 40px;
    margin-bottom: auto;
    background-color: #3333;
    width: 70%;
    height: auto;
    padding: 30px;
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
  
`;

const MarginDiv = styled.div`
  margin-top: 200px;
`;

const VoteViewDiv = styled.div`
  margin-top: 100px;
  display: block;
  width: 100%;
`;


const ReadPageComponent = () => {
  return (

    <ReadDiv>
      <ReadViewDiv>
        <Title />
        <Profile />
        <Daycheck />
        <ThumbsUp />

        <MarginDiv>
          <Description />
        </MarginDiv>
        <hr />

        <TopStatus />
        <VoteViewDiv>
          <Voting />
        </VoteViewDiv>

        <Comment />

        <hr />
      </ReadViewDiv>

    </ReadDiv>

  )
}

export default ReadPageComponent
