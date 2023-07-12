import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import { Button as MuiButton } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from'react-redux';

import { actions1 } from '../reducer/testReducer';

const SignupPageView = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
  justify-content: center;
  width: 90%;
  height: 700px;

`;

const FieldTitle = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-top: 20px;
  margin-bottom: 4px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 800;
  margin-top: 32px;
`;

const SignupView = styled.div`
  width: 100%;
  max-width: 640px;
  padding: 24px;
  margin: 30px;
  text-align: left;
`;

const SingupButton = styled.div`
  display: inline-block;
  margin: 8px;
  float: right;
`;

const Signup = () => {
  const navigate = useNavigate();
  const [idValue, setId] = useState('');
  const [pwValue, setPw] = useState('');
  const [userNamelValue, setuserNmae] = useState('');
  const [phNumberValue, setPhNumber] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const goToBack = () => {
    navigate("/")
  }

  const handleSignUp = async () => {
    const data = {
      id: idValue,
      password: pwValue,
      user_name: userNamelValue,
      phone_number: phNumberValue
    }
    try {const response = await axios.post("/auth/signup", data, {
        headers: {
            "Content-Type":"application/json",
            
        },
        withCredentials:true,
        });
        if(response.status === 200) {
            console.log(response);
            alert("회원가입이 되었습니다.");
            navigate("/");
        }
    }
    catch (err) {
        console.log(err);
    }

  }
  
  return (
    <SignupPageView>
      <SignupView>
        <Title>회원가입</Title>
        <FieldTitle>아이디</FieldTitle>
        <TextField
          label="ID"
          required
          fullWidth
          name="id"
          value={idValue}
          onChange={e => setId(e.target.value)}
        />
        <FieldTitle>비밀번호</FieldTitle>
        <TextField
          label="Password"
          type='password'
          required
          fullWidth
          autoComplete='current-password'
          value={pwValue}
          onChange={e => setPw(e.target.value)}
        />
        <FieldTitle>이름</FieldTitle>
        <TextField
          label="username"
          required
          fullWidth
          id="name"
          value={userNamelValue}
          onChange={e => setuserNmae(e.target.value)}
        />
        <FieldTitle>전화번호</FieldTitle>
        <TextField
          label="phone_number"
          required
          fullWidth
          value={phNumberValue}
          onChange={e => setPhNumber(e.target.value)}

        />
        <SingupButton onClick={goToBack}>
          <MuiButton fullWidth variant="contained" >취소</MuiButton>

        </SingupButton >
        <SingupButton>
          <MuiButton onClick={handleSignUp} fullWidth variant="contained">확인</MuiButton>
        </SingupButton>
      </SignupView>

    </SignupPageView>
  )
}

export default Signup