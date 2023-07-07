import React from 'react'
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom'
import ReadPageComponent from '../components/frame/main/read-page-component/ReadPageComponent';
import axios from 'axios';

const ReadingPageDiv = styled.div`
    width: 100%;
`;


const ReadingBoard = async () => {
  const { id } = useParams();
  console.log(id);

  try {const response = await axios.get(`/auth/board/detail/${id}`, {
        headers: {
            "Content-Type":"application/json",

        },
        withCredentials:true,
        });
        if(response.status === 200) {
            console.log(response);
        }
    }
    catch (err) {
        console.log(err);
    }

  return (
    <div>
      <ReadingPageDiv>
        <ReadPageComponent />
      </ReadingPageDiv>
    </div>
  )
}

export default ReadingBoard
