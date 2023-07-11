import React, {useState} from 'react'
import styled from 'styled-components';
import SubMenu from './SubMenu';

const MyMenuDiv = styled.div`
    height:100px;
    width:150px;
    box-shadow: 1px 1px 5px 1px;
    cursor: pointer;
`;



const MyMenu = () => {
    
  return (
    <MyMenuDiv>
        <SubMenu/>
        <SubMenu/>
        <SubMenu/>
        <SubMenu/>
    </MyMenuDiv>
  )
}

export default MyMenu