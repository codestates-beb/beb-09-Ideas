import React from 'react'
import styled from 'styled-components';

import BoardList from '../../../frequently_used/BoardList'
import SideInfo from './SideInfo';


const MainCompoDiv = styled.div`
    display:flex;
    
`;

const MainPageComponent = ({boards}) => {
    
  return (
    <MainCompoDiv>
        <BoardList boards={boards}/>
        <SideInfo/>
    </MainCompoDiv> 
  )
}

export default MainPageComponent