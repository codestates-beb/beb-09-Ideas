import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom';

const SidebarDiv = styled.div`
    height:100%;
    width: 100px;
    background: #e3e7ea;
    position:fixed;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.6);

`;

const VirtualSidebarDiv = styled.div`
    width: 100px;
    height: 1000px;
    
`;

const Sidebar = () => {
  return (
    <div style={{float:'left'}}>
        <SidebarDiv>
        </SidebarDiv>
        <VirtualSidebarDiv/>
    </div>
  )
}

export default Sidebar
