import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import ProfilePageComponent from '../components/frame/main/profile-page-component/ProfilePageComponent'


const Profile = () => {
    const {autorId} = useParams();
    useEffect(()=>{
        getAPIUserProfile();
    });
    const getAPIUserProfile = async () => {
        try {const response = await axios.get(`/profile/${autorId}`);
            if(response.status === 200) {
                console.log(response);
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