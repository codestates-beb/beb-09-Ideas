import React from 'react'
import styled from 'styled-components'
import Score from './Score';
import { useSelector } from 'react-redux';

const ScoreMainDiv = styled.h3`
    height: 500px;
    margin: 50px;
`; 

const ScoreMain = () => {
    const userScore = useSelector(state=>(state.userProfile.userScore));
  return (
    <ScoreMainDiv>
        <Score userScore={userScore}/>
    </ScoreMainDiv>
  )
}

export default ScoreMain