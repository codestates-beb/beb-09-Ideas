import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import ProfilePageComponent from '../components/frame/main/profile-page-component/ProfilePageComponent'
import { actions1 } from '../reducer/testReducer';


const Profile = () => {
    const {autorId} = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        getAPIUserProfile();
    });
    const getAPIUserProfile = async () => {
        try {const response = await axios.get(`/profile/${autorId}`);
            if(response.status === 200) {
                dispatch(actions1.setProfileInfo)
                console.log(response.data);
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