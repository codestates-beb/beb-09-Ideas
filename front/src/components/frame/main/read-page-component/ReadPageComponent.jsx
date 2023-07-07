import React from 'react'
import styled from '@emotion/styled';


const ReadDiv = styled.div`
    display:flex;
    flex-direction: column;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    background-color: #3333;
    width: 70%;
    height: 700px;
    padding: 30px;
    & > * + * {
        margin-top: 15px;
    }
`;


const ReadPageComponent = () => {
  return (
    <div>
      <ReadDiv>
        테스트
      </ReadDiv>
    </div>
  )
}

export default ReadPageComponent
