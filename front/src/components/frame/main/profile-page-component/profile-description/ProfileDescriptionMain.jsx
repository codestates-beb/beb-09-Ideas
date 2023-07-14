import React, {useState} from 'react'
import styled from 'styled-components';
import Profile from './Profile';
import Description from './Description';
import WalletModal from '../../../../frequently_used/WalletModal';
import { useSelector } from 'react-redux';


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

const WalletButton = styled.button`
    border:1px solid #b7acb8;
    border-radius: 15px;
    background: white;
    height:40px;
    width:60px;
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

const ProfileDescriptionMain = () => {
    const [isOpen, setIsOpen] = useState(false);
    const userId = useSelector(state=>(state.userProfile?.userData?.db_id));
    const myId = useSelector(state=>(state.myProfile?.userData?.db_id));
    // console.log(userProfile);
    // console.log(myProfile);
    const handleClose = () => {
        setIsOpen(!isOpen);
    }

  return (
    <MainDiv>
        <Profile />
        <div>
            <Description/>
        </div>
        {userId === myId ? <WalletButton onClick={handleClose}> wallet </WalletButton>:""}
        
        <WalletModal isOpen={isOpen} handleClose={handleClose}/>
    </MainDiv>
  )
}

export default ProfileDescriptionMain