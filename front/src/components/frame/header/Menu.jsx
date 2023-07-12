import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CgProfile } from "react-icons/cg";
import { BsFillDoorOpenFill } from "react-icons/bs"
const MenuDiv = styled.div`
    position:absolute;
    background:rgb(240,240,240);
    border: 2px solid black;
    box-shadow: 1px 1px 1px 1px;
    border-radius: 10px;
    height:120px;
    width: 100px;
    right: 50px;
    padding: 10px;
    cursor: pointer;
    visibility: hidden;
    top:500px;
    
`;


const SubMenuDiv = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 95%;
    height: 35px;
    /* border: 1px solid black; */
    &:hover {
        background: rgba(0,0,0,0.05);
        
    }
    
`;


const Menu = ({ handleLogout }) => {
    const nav = useNavigate();
    const myProfile = useSelector(state => (state.myProfile));
    return (
        <MenuDiv>
            <SubMenuDiv onClick={() => { nav(`profile/${myProfile?.id}`) }}>
                <CgProfile size={"30px"} />
                <h4>profile</h4>
            </SubMenuDiv>
            <SubMenuDiv onClick={handleLogout}>
                <BsFillDoorOpenFill size={"30px"} />
                <h4>Log out</h4>
            </SubMenuDiv>
        </MenuDiv>
    )
}

export default Menu