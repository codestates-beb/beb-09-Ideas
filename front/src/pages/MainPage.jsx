import { useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux';

import MainPageComponent from '../components/frame/main/main-page-component/MainPageComponent';
import { actions1 } from '../reducer/testReducer';

const MainPageDiv = styled.div`
    width: 100%;

`;


const MainPage = () => {
    const dispatch = useDispatch();
    const boards = useSelector((state)=>(state.boards));
    useEffect(()=>{
        listBoards();
    }, []);

const listBoards = async () => {
    try {
        const response = await axios.get('/board/list')
        if(response.status === 200) {
            dispatch(actions1.setBoards(response.data.data))
        }
        console.log(response)
        
        
    }
    catch (err) {
        console.log(err);
    }
    
    
    
}
  return (
    <MainPageDiv>
        <MainPageComponent boards={boards}/>
    </MainPageDiv>
  )
}

export default MainPage