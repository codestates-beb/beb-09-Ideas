import React, {useState} from 'react'
import {Modal, Box, Button} from '@mui/material';
import axios from 'axios';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '15px',
};
const WalletModal = ({isOpen, handleClose}) => {
    const [myToken, setMyToken] = useState('0');
    const [address, setAddress] = useState('');
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
            from:address,
            to: toAddress,
            amount: amount
        };
        axios.post('/contract/send/user', body)
            .then((res)=>{

            })
            .catch((err)=>{

        })
    }

    console.log(address);
    const body = {
        address: '0xE6bf42281A3d11b616032FCd75cAC09d2c4D1630'
    };
    axios.get('/auth/decodeToken')
        .then((res)=>{
            setAddress(res.data.address);
        })
        .catch((err)=>{
            console.error(err);
        })
    axios.post('/contract/quantity', body, )
        .then(res => {
        setMyToken(res.data.data.quantity);
    })
        .catch(err => {
            console.log("no data");
        })
    return (
        <Modal open={isOpen} onClose={handleClose}>
            <Box sx={style}>
                My MFT : {myToken}

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
                    <Button id="sendBtn" onClick={handleSendButtonClick}>
                        send
                    </Button>
                </div>
            </Box>
        </Modal>
    )
}

export default WalletModal;