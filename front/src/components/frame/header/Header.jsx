import React, { useState } from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material'

import Profile from "./Profile";

import LoginModal from "./LoginModal";
import { actions1 } from '../../../reducer/testReducer';


// import Logo from "../../frequently-used/Logo";
// import { FiUser } from "react-icons/fi";


const BlurrDiv = styled.div`
    position: fixed;
    top: 0px;
    width: 10000px;
    height: 10000px;
    background: rgba(0,0,0,0.6);
    z-index: 2;
`;

const HeaderDiv = styled.div`
  background-color: rgba(236, 245, 250);
  position: fixed;
  border-radius: 0px 0px 15px 15px;
  width:94%;
  height:70px;
  z-index: 1;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3% 0 3%;
  h2 {
    cursor: pointer;
  }
  img {
    cursor: pointer;
    &:hover{ opacity: 0.8;}
  }
`;

const VirtualHeaderDiv = styled.div`
    height: 70px;
 `;

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state)=> (state.isLoggedIn));
  const nav = useNavigate();
  const [loginModal, setLoginModal] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리


  const handleLogin = () => {
    // 로그인 처리
    setLoginModal(true);
  };
  const handleLogout = () => {
    dispatch(actions1.toggleIsLoggedIn(false));
  }

  return (
    <div>
        {loginModal &&(<BlurrDiv/>)}
        <HeaderDiv>
            <h2 onClick={()=>{nav("/")}}>Ideas</h2>        
            <LoginModal
                loginModal={loginModal}
                onHide={() => setLoginModal(false)}
            />
            {isLoggedIn ? (
                // 로그인이 완료되었을 때 표시되는 아이콘
                <Profile handleLogout={handleLogout}/>
            ) : (
                // 로그인이 안되었을때 표시 로그인 버튼
                <Button onClick={handleLogin} variant='contained' >로그인</Button>
                
            )}

        </HeaderDiv>
        <VirtualHeaderDiv/>
    </div>
  );
};

export default Header;
