import styled from "styled-components";
import { useDispatch } from "react-redux";
import React, { useState } from 'react';

import Profile from "./Profile";
import LoginButton from "./LoginButton";
import { actions1 } from '../../../reducer/testReducer';
import LoginPage from './LoginPage';


// import Logo from "../../frequently-used/Logo";


const HeaderDiv = styled.div`
  background-color: #8a8afa;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const Header = () => {
  const dispatch = useDispatch();
  const [loginModal, setLoginModal] = useState(false);

  const testFunction = () => {
    dispatch(actions1.toggleIsLoggedIn(true));
  }

  return (
    <HeaderDiv>
      <h2>Ideas</h2>
      <LoginPage
        show={loginModal}
        onHide={() => setLoginModal(null)}
      />
      <button onClick={() => setLoginModal(true)}>로그인</button>
    </HeaderDiv>
  );
};

export default Header;
