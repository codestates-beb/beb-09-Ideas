import React from 'react';
import styled from 'styled-components';
import {Modal, Box, Button, Typography} from '@mui/material';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 100,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '15px',
};

const TopDiv = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    span {
        font-size: 18px;
        font-weight: bold;


    }

`;

const BottomDiv = styled.div`
    margin-top: 30px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    button {
        border-radius:15px;
        &:hover {
            background:rgb(233,233,233);
        }

     }
        
    
`;

const BasicModal = ({isOpenModal, handleModalToggle, handleSubmitAPI}) => {
  return (
    <Modal open={isOpenModal} onClose={handleModalToggle}>
        <Box sx={style}>
            <TopDiv>
                <span>
                    Voting is only possible <span style={{color:'rgb(230, 100, 100)'}}>once per day.</span>
                    <br/>
                    Are you sure to want to vote right now?
                </span>
            </TopDiv>
            <BottomDiv>
                <Button onClick={handleModalToggle}> No </Button>
                <Button onClick={handleSubmitAPI}> Yes </Button>
            </BottomDiv>   
        </Box>
    </Modal>
  )
}

export default BasicModal;