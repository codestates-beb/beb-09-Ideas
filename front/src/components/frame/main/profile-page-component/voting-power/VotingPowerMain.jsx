import React from 'react'
import styled from 'styled-components'
import Score from './VotingPower';
import { useSelector } from 'react-redux';

const ScoreMainDiv = styled.h3`
    height: 500px;
    margin: 50px;
`; 

const VotingPowerMain = () => {
    const userScore = useSelector(state=>(state.userProfile?.userScore));
  return (
    <ScoreMainDiv>
        <Score userScore={userScore}/>
    </ScoreMainDiv>
  )
}

export default VotingPowerMain