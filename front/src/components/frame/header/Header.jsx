import styled from "styled-components";
import { useDispatch } from "react-redux";
import React, { useState } from 'react';

import Profile from "./Profile";
import { actions1 } from '../../../reducer/testReducer';
import LoginModal from './LoginModal';
import { FiUser } from "react-icons/fi";

// import Logo from "../../frequently-used/Logo";


const HeaderDiv = styled.div`
  background-color: rgb(193, 211, 223);
  position: fixed;
  width:100%;
  height:70px;
  z-index: 1;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

 const VirtualHeaderDiv = styled.div`
    height: 70px;
 `;


const Header = () => {
  const dispatch = useDispatch();
  const [loginModal, setLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리

  const testFunction = () => {
    dispatch(actions1.toggleIsLoggedIn(true));
  }

  const handleLogin = () => {
    // 로그인 처리
    setIsLoggedIn(true);
    setLoginModal(true);
  };


  return (
    <div>
        <HeaderDiv>
        <h2>Ideas</h2>        
        <LoginModal
            show={loginModal}
            onHide={() => setLoginModal(false)}
        />
        {isLoggedIn ? (
            // 로그인이 완료되었을 때 표시되는 아이콘
            <div>
                <FiUser />
            </div>
        ) : (
            // 로그인이 안되었을때 표시 로그인 버튼
            <button  onClick={handleLogin}>로그인</button>
            
        )}
        
        
        </HeaderDiv>
        <VirtualHeaderDiv/>
    </div>
        
    
  );
};

export default Header;
