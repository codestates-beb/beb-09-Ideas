import React from 'react'
import {Modal, Box} from '@mui/material';
import CommentBox from './CommentBox';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '15px',
  overflowY:'scroll'
};

const CommentModal = ({open, handleClose}) => {
  return (
    <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
            <CommentBox/>
            <CommentBox/>
            <CommentBox/>
            <CommentBox/>
            <CommentBox/>
        </Box>
    </Modal>
    
    
  )
}

export default CommentModal;