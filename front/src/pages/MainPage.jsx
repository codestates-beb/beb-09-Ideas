import { useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import MainPageComponent from '../components/frame/main/main-page-component/MainPageComponent';
import { actions1 } from '../reducer/testReducer';

const MainPageDiv = styled.div`
    width: 100%;
    /* margin: 20px; */
    /* padding: 24px; */
    /* text-align: left; */
`;


const MainPage = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        listBoards();
    }, []);

const listBoards = async () => {
    try {
        const response = await axios.get('/board/list')
        if(response.status === 200) {
            dispatch(actions1.setBoards(response.data.data))
        }
        
        
    }
    catch (err) {
        console.log(err);
    }
    
    
    
}
  return (
    <MainPageDiv>
        <MainPageComponent/>
    </MainPageDiv>
  )
}

export default MainPage