import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux';

import ProfilePageComponent from '../components/frame/main/profile-page-component/ProfilePageComponent'
import { actions1 } from '../reducer/testReducer';
import styled from '@emotion/styled';

const ReadDiv = styled.div`
    display:block;
    flex-direction: column;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 40px;

    width: 70%;
    height: auto;
    padding: 30px;
    border-radius: 15px;
    

    & > * + * {
        margin-top: 15px;
    }
`;


const Profile = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const profiledata = useSelector((state)=>(state.userProfile));
    
    useEffect(()=>{
        getAPIUserProfile();
    },[]);
    const getAPIUserProfile = async () => {
        try {const response = await axios.get(`/user/profile/${id}`);
            
            if(response.status === 200) {
                dispatch(actions1.setUserProfileInfo(response.data.data));
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    
  return (
    <ReadDiv>
        <ProfilePageComponent profiledata={profiledata}/>
    </ReadDiv>
  )
}

export default Profile