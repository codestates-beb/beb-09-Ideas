import React, {useState} from 'react'
import styled from 'styled-components';
import Profile from './Profile';
import Description from './Description';
import WalletModal from '../../../../frequently_used/WalletModal';


const MainDiv = styled.div`
    display:grid;
    grid-template-columns: 1fr 8fr;
    height: 300px;
    width: 100%;
    & > div:first-child {
        
    }
    & > div:nth-child(2) {
        

    }
`;

const ProfileDescriptionMain = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(!isOpen);
    }

  return (
    <MainDiv>
        <Profile />
        <div>
            <Description/>
        </div>
        <button onClick={handleClose}> 지갑 </button>
        <WalletModal isOpen={isOpen} handleClose={handleClose}/>
    </MainDiv>
  )
}

export default ProfileDescriptionMain