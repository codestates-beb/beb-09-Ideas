import React from 'react'
import styled from '@emotion/styled';
import { useSelector } from 'react-redux'; 

const TitleDiv = styled.h3`
    text-align:center;
    font-size: 25px;
    margin: 40px;
`; 

const Title = () => {
    const board = useSelector(state=>(state?.board));
  return (
      <TitleDiv>{board?.title} <span style={{fontSize:'15px', fontWeight:'normal'}}>{board?.created_at}</span></TitleDiv>
  )
}

export default Title
