import React, {useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import MainPageComponent from '../components/frame/main/main-page-component/MainPageComponent';
import { actions1 } from '../reducer/testReducer';

const CategoryBoardDiv = styled.div`
    width: 100%;
`;


const CategoryBoard = () => {
    const {category} = useParams();
    const boards = useSelector((state)=>(state.boards));
    const dispatch = useDispatch();
    useEffect(()=> {
        getAPICategoryBoard();
    },[category]);

    const getAPICategoryBoard = async() => {
        try{
            const response = await axios.get(`/board/list/${category}`);
            if(response.status === 200) {
                console.log(response);
                dispatch(actions1.setBoards(response.data.data));
            }
        }
        catch(err) {
            console.log(err);
        }
    }
  return (
    <CategoryBoardDiv>
        <MainPageComponent boards={boards}/>
    </CategoryBoardDiv>
  )
}

export default CategoryBoard