import React from 'react'
import { styled } from 'styled-components'
import { useSelector } from 'react-redux';

const DescriptionDiv = styled.div`
    text-align: center;
`;
const TitleDiv = styled.h3`
    text-align:center;
`; 


const Description = () => {
    const profile = useSelector(state=>(state.userProfile?.userData?.profile));
  return (
    <>
        <TitleDiv>
            {profile?.title}
        </TitleDiv>
        <hr/>
        <DescriptionDiv>
            {profile?.description}
        </DescriptionDiv>
    </>
  )
}

export default Description