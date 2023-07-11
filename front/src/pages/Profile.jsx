import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux';

import ProfilePageComponent from '../components/frame/main/profile-page-component/ProfilePageComponent'
import { actions1 } from '../reducer/testReducer';


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
                dispatch(actions1.setUserProfileInfo(response.data));
                console.log(response.data);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    
  return (
    <div>
        <ProfilePageComponent profiledata={profiledata}/>
    </div>
  )
}

export default Profile