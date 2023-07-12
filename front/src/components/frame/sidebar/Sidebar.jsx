import React from 'react';
import styled from '@emotion/styled';
import CategoryButton from '../../frequently_used/CategoryButton';

const SidebarDiv = styled.div`
    height:100%;
    width: 100px;
    background: #ffffff;
    position:fixed;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.6);
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;

`;

const VirtualSidebarDiv = styled.div` 
    width: 100px;
    height: auto;
    
`;



const Sidebar = () => {
  return (
    <div style={{float:'left'}}>
        <SidebarDiv>
                <CategoryButton text1={"manage"} path="management"/>
                <CategoryButton text1={"economy"} path="economy"/>
                <CategoryButton text1={"security"} path="security"/>
                <CategoryButton text1={"ai"} path="ai"/>
                <CategoryButton text1={"blockchain"} path="blockchain"/>
                <CategoryButton text1={"cloud"} path="cloud"/>
        </SidebarDiv>
        <VirtualSidebarDiv/>
    </div>
  )
}

export default Sidebar;
