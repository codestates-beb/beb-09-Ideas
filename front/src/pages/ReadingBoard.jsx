import React from 'react'
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom'
import ReadPageComponent from '../components/frame/main/read-page-component/ReadPageComponent';


const ReadingPageDiv = styled.div`
    width: 100%;
`;

const ReadingBoard = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <ReadingPageDiv>
        <ReadPageComponent />
      </ReadingPageDiv>
    </div>
  )
}

export default ReadingBoard
