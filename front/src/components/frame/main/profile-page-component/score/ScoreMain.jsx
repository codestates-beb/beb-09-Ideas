import React from 'react'
import styled from 'styled-components'
import Score from './Score';

const ScoreMainDiv = styled.h3`
    height: 500px;
    margin: 50px;
`; 

const ScoreMain = ( { profiledata } ) => {
  return (
    <ScoreMainDiv>
        <Score profiledata={profiledata}/>
    </ScoreMainDiv>
  )
}

export default ScoreMain