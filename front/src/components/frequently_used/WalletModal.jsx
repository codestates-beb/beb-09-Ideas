
import React, {useState} from 'react'
import styled from 'styled-components';
import {Modal, Box, Button} from '@mui/material';
import axios from 'axios';

import SendModal from './SendModal';
import { useDispatch } from 'react-redux';

import {actions1} from '../../reducer/testReducer';


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

const ButtonContainer = styled.div`
    margin-top: 30px;
    display:flex;
    justify-content: space-around;
    align-items: center;
    width:80%;

`;

const BottomDiv = styled.div`
    width:100%;
    height:100%;
    /* background: blue; */
`;

const TokenContainer = styled.div`
    width:95%;
    height: 90px;
    border-radius: 15px;
    border:0px solid black;
    display:grid;
    grid-template-columns: 100px 300px 100px;
    justify-content: center;
    align-items: center;
    margin:auto;
    margin-top:20px;
    background-color: rgba(200,200,200, 0.2);
    &:hover {
        background-color: rgba(200,200,200, 0.1);
        cursor: pointer;
    }
`;

const TokenCircleDiv = styled.div`
    width:60px;
    height:60px;
    border: 1px solid black;
    border-radius: 30px;
`;

const TokenMiddleDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
`;

const TokenNameDiv = styled.div`
    font-size: 20px;
    color:white;
    font-weight: bold;
`;
const TokenAmmountDiv = styled.div`
    font-size: 18px;
    color:rgb(48, 48, 48);
    font-weight: bold;
`;

const TokenPriceDiv = styled.div`
    font-size: 20px;
    color:white;
    font-weight: bold;
`;



const WalletButton = styled.button`
    border:1px solid #b7acb8;
    border-radius: 15px;
    background: white;
    height:50px;
    width:100px;
    margin:auto;
    margin-top: 0;
    background-image: linear-gradient(to right, #ffffff, #f5e4f8);
    color: #6e6a6a;
    box-shadow: 2px 2px 1px;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }

`;


const WalletModal = ({isOpen, handleClose}) => {
    const dispatch = useDispatch();
    const [isSendOpen, setIsSendOpen] = useState(false);

    const toggleSendModal = () => {
        setIsSendOpen(!isSendOpen);
    }
    const [myToken, setMyToken] = useState('0');
    const [address, setAddress] = useState('');




    const changeAddress = (obj, newAddress) =>{
        obj.address = newAddress;
    }
    const body = {
        address: ''
    };
    

    
    axios.get('/auth/decodeToken')
        .then(async (res) => {
            console.log(res);
            dispatch(actions1.setMyAddress(res.data.address));
            // setPK(res.data.pk);
            setAddress(res.data.address);
            changeAddress(body, res.data.address);
            console.log(body.address);
            await axios.post('/contract/quantity', body,)
                .then(res => {
                    setMyToken(res.data.data.quantity);
                })
                .catch(err => {
                    console.log("no data");
                })
        })
        .catch((err)=>{
            console.error(err);
        })
    
    return (
        <Modal open={isOpen} onClose={handleClose}>
            <Box sx={style}>
                
                <MainDiv>
                    <TopDiv>
                        <span>$1.05</span>
                        <ButtonContainer>
                            <WalletButton id="sendBtn">deposit</WalletButton>
                            <WalletButton id="sendBtn">buy</WalletButton>
                            <WalletButton id="sendBtn" onClick={toggleSendModal}>send</WalletButton>
                        </ButtonContainer>
                    </TopDiv>
                    <BottomDiv>
                        <TokenContainer>
                            <TokenCircleDiv></TokenCircleDiv>
                            <TokenMiddleDiv>
                                <TokenNameDiv>MeaningFull</TokenNameDiv>
                                <TokenAmmountDiv>{Number(myToken).toLocaleString('ko-KR')} MFT</TokenAmmountDiv>
                            </TokenMiddleDiv>
                            <TokenPriceDiv>$1.12</TokenPriceDiv>
                        </TokenContainer>
                        {/* My MFT : {myToken}
                    <div>
                        <label>
                            address :
                            <input type="text" value={toAddress} onChange={handleToAddressChange}/>
                        </label>
                        <br/>
                        <label>
                            amount :
                            <input type="text" value={amount} onChange={handleAmountChange}/>
                        </label>
                        <br/>
                        
                    </div> */}
                    </BottomDiv>
                </MainDiv>
                <SendModal isSendOpen={isSendOpen} toggleSendModal={toggleSendModal} myToken={myToken}/>
            </Box>
        </Modal>
    )
}

export default WalletModal;