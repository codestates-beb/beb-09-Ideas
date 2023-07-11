import React from 'react'
import { styled } from 'styled-components'

const DescriptionDiv = styled.div`
    text-align: center;
`;

const Description = ( {profiledata} ) => {
  return (
    <DescriptionDiv>
        {profiledata?.id?.data.userData.profile.description}
    </DescriptionDiv>
  )
}

export default Description