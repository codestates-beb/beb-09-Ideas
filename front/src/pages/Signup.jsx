import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import { Button as MuiButton } from '@mui/material';


const SignupPageView = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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
text-align: left;
`;

const Inlabel = styled.label`
    border-radius:4px;
    display: inline-block;
    padding: 10px 10px;
    color: #fff;
    vertical-align: middle;
    background-color: #999999;
    cursor: pointer;
    height: 24px;
    margin: 0 0 3px;
    margin-left: 5px;
`;

const btnStyle = styled.button`
  color: white;
  background: teal;
  padding: .375rem .75rem;
  border: 1px solid teal;
  borderRadius: .25rem;
  fontSize: 1rem;
  lineHeight: 1.5;
  `
const SingupButton = styled.div`
  
`;

const Signup = () => {
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
        />
        <FieldTitle>비밀번호</FieldTitle>
        <TextField
          label="Password"
          type='password'
          required
          fullWidth
          autoComplete='current-password'
        />
        <FieldTitle>이름</FieldTitle>
        <TextField
          label="username"
          type='username'
          required
          fullWidth
          autoComplete='current-password'
        />
        <FieldTitle>전화번호</FieldTitle>
        <TextField
          label="phone_number"
          type='phone_number'
          required
          fullWidth
          autoComplete='current-password'
        />
      </SignupView>
      <SingupButton>
        <MuiButton type="submit" fullWidth variant="contained">취소</MuiButton>
      </SingupButton>
    </SignupPageView>
  )
}

export default Signup