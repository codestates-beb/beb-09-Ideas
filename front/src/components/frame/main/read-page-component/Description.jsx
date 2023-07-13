import React from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'; 

const DescriptionDiv = styled.div`
    width:80%;
    margin:auto;
    text-align: left;
    font-size: 20px;
    margin-top: 80px;
    margin-bottom: 100px;
    
`;

const Description = () => {
    const board = useSelector(state=>(state?.board));
    console.log(board);
  return (
    <DescriptionDiv>
        {board?.content}
    </DescriptionDiv>
    
  )
}

export default Description
