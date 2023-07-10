import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import ProfilePageComponent from '../components/frame/main/profile-page-component/ProfilePageComponent'
import { actions1 } from '../reducer/testReducer';


const Profile = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        getAPIUserProfile();
    });
    const getAPIUserProfile = async () => {
        try {const response = await axios.get(`/user/profile/${id}`);
            if(response.status === 200) {
                dispatch(actions1.setProfileInfo)
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    
  return (
    <div>
        <ProfilePageComponent/>
    </div>
  )
}

export default Profile