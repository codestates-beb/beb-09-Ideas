import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import { Button as MuiButton } from '@mui/material';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { Modal, Button as Reactbtn } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const LoginView = styled.div`
width: 100%;
max-width: 640px;
padding: 24px;
text-align: left;
`;

const LoginPageView = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const FieldTitle = styled.div`
  font-size: 18px;
  font-weight: 800;
  margin-top: 20px;
  margin-bottom: 4px;
`;

const LoginButton = styled.div`
  margin-top: 10px;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 50px;
  background-color: #FFFFFF;
  border-radius: 20px;
  border: 5px solid #64A6DF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
const CloseButton = styled(Reactbtn)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-weight: bold;
  background-color: transparent;
  border: none;
  color: #333;
  font-size: 24px;
  cursor: pointer;
`;



const LoginPage = ({ show, onHide }) => {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate("/Signup")
    
  }

  return (
    <div>
      <Modal show={show} onHide={onHide}>
        <ModalContent>
          <CloseButton onClick={onHide}>
            &times;
          </CloseButton>

          <LoginPageView>
            <LoginView>
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 2, bgcolor: 'primary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography color="black" component="h1" variant='h5'>로그인</Typography>
              </Box>

              <FieldTitle>아이디</FieldTitle>
              <TextField
                label="ID"
                required
                fullWidth
                name="id"
              />

              <FieldTitle>패스워드</FieldTitle>
              <TextField
                label="Password"
                type='password'
                required
                fullWidth
                autoComplete='current-password'
              />
              <LoginButton>
                <MuiButton type="submit" fullWidth variant="contained">로그인</MuiButton>

                <Grid container>
                  <Grid item>
                    {/* <Link onclieck={goToSignup}>Sign Up</Link> */}
                    <MuiButton  onClick={goToSignup}>Signup</MuiButton>
                  </Grid>
                </Grid>
              </LoginButton>
            </LoginView>
          </LoginPageView>
        </ModalContent>
      </Modal>

    </div>
  )
}

export default LoginPage
