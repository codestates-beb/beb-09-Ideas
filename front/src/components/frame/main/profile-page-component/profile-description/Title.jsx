import React from 'react'
import styled from 'styled-components'

const TitleDiv = styled.h3`
    text-align:center;
`; 

const Title = ( {profiledata} ) => {

  return (
    
    <TitleDiv>
        {profiledata?.id?.data.userData.profile.title}
    </TitleDiv>
  )
}

export default Title