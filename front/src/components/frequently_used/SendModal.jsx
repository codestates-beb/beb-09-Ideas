
import React, {useState} from 'react'
import styled from 'styled-components';
import {Modal, Box} from '@mui/material';
import axios from 'axios';
import { useSelector } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #bdbdbd',
  boxShadow: 24,
  p: 0,
  borderRadius: '15px'
};

const MainDiv = styled.div`
    width: 100%;
    height: 600px;
    background-image: linear-gradient(to right, #9c9797, #403d41);
    border-radius: 15px;
    span{
        font-size: 30px;
        color: white;
        font-weight: bold;
    }
    box-shadow: 3px 3px 5px;
    overflow: hidden;
`;

const TopDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background: red; */
    padding-top:50px;
    padding-bottom: 50px;
`;

// const ButtonContainer = styled.div`
//     margin-top: 30px;
//     display:flex;
//     justify-content: space-around;
//     align-items: center;
//     width:80%;

// `;

const InputMiddleDiv = styled.div`
    width:100%;
    height:200px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    /* background-color: blue; */
    position:relative;
    
    
    
`;

const SendInput = styled.input`
    width:90%;
    height: 50px;
    border-radius: 15px;
    margin:auto;
    font-size: 18px;
    padding-left:20px;
`;

// const TokenContainer = styled.div`
//     width:95%;
//     height: 90px;
//     border-radius: 15px;
//     border:0px solid black;
//     display:grid;
//     grid-template-columns: 100px 300px 100px;
//     justify-content: center;
//     align-items: center;
//     margin:auto;
//     margin-top:20px;
//     background-color: rgba(200,200,200, 0.2);
//     &:hover {
//         background-color: rgba(200,200,200, 0.1);
//         cursor: pointer;
//     }
// `;

const TokenCircleDiv = styled.div`
    width:60px;
    height:60px;
    border: 1px solid black;
    border-radius: 30px;
    margin-top: 50px;
`;

const SendDiv = styled.div`
    font-size: 25px;
    color:white;
    font-weight: bold;
`;


const ButtonDiv = styled.div`
    /* position:relative; */
    display:flex;
    align-items: center;
    justify-content: space-between;
    /* background: green; */
    height:100%;
    
`;

const WalletButton = styled.button`
    position:relative;
    bottom: -90px;
    border:1px solid #b7acb8;
    border-radius: 15px;
    background: white;
    height:50px;
    width:40%;
    margin:auto;
    margin-top: 0;
    background-image: linear-gradient(to right, #d8cbcb, #9a849e);
    color: #6e6a6a;
    box-shadow: 2px 2px 1px;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
    span {
        color:white;
        font-size: 18px;
    }

`;

const MaxButton = styled.button`
    width:50px;
    height:30px;
    position:absolute;
    top:135px;
    right:30px; 
    border-radius: 15px;
    background: #edf4f7;
    &:hover{
        background: #d2d9db;
        cursor: pointer;
    }

`;


const SendModal = ({isSendOpen, toggleSendModal, myToken }) => {
    const pk = useSelector(state=>(state.myProfile?.pk));

    const [toAddress, setToAddress] = useState('');
    const [amount, setAmount] = useState('');


    const handleToAddressChange = (event) =>{
        setToAddress(event.target.value);
    }

    const handleAmountChange = (event) =>{
        setAmount(event.target.value);
    }
    

    const handleSendButtonClick = () =>{
        console.log("btn click");
        const body ={
            from:pk,
            to: toAddress,
            amount: amount
        };
        console.log(body);
        axios.post('/contract/send/user', body)
            .then((res)=>{

            })
            .catch((err)=>{


        })
    }
        console.log('-------------------');
        console.log(pk);
    

    return (
        <Modal open={isSendOpen} onClose={toggleSendModal}>
            <Box sx={style}>
                <MainDiv>
                    <TopDiv>
                        <SendDiv>Send MFT</SendDiv>
                        <TokenCircleDiv></TokenCircleDiv>
                    </TopDiv>
                    <InputMiddleDiv>
                        <SendInput value={toAddress} onChange={handleToAddressChange} placeholder={'address'}/>
                        <SendInput value={amount} onChange={handleAmountChange} placeholder={'amount'}/>
                        <MaxButton onClick={()=>{setAmount(myToken)}}>MAX</MaxButton>
                    </InputMiddleDiv>
                    <ButtonDiv>
                        <WalletButton onClick={toggleSendModal}> <span>Cancel</span> </WalletButton>
                        <WalletButton onClick={handleSendButtonClick}> <span>Send</span> </WalletButton>
                    </ButtonDiv>
                </MainDiv>
            </Box>
        </Modal>
    )
}

export default SendModal;