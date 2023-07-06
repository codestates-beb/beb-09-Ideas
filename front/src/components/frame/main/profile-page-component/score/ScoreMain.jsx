import React from 'react'
import styled from 'styled-components'
import Score from './Score';

const ScoreMainDiv = styled.h3`
    height: 500px;
    margin: 50px;
`; 

const ScoreMain = () => {
  return (
    <ScoreMainDiv>
        <Score/>
    </ScoreMainDiv>
  )
}

export default ScoreMain