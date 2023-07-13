import React, {useEffect} from 'react'
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom'
import ReadPageComponent from '../components/frame/main/read-page-component/ReadPageComponent';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { actions1 } from '../reducer/testReducer';

const ReadingPageDiv = styled.div`
    width: 90%;
`;


const ReadingBoard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  useEffect(()=>{
    getBoard();
  },[])
  const getBoard = async () => {
    try {
        const response = await axios.get(`/board/detail/${id}`);
        if(response.status === 200) {
            console.log(response);
        }
        dispatch(actions1.setBoard(response.data.data));
    }
    catch (err) {
        console.log(err);
    }
  }

  

  return (
    <ReadingPageDiv>
      <ReadPageComponent />
    </ReadingPageDiv>
  )
}

export default ReadingBoard
