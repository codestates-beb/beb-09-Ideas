import React from 'react'
import {Modal, Box} from '@mui/material';

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
    console.log(isOpen);
  return (
    <Modal open={isOpen} onClose={handleClose}>
        <Box sx={style}>
            
        </Box>
    </Modal>
  )
}

export default WalletModal;