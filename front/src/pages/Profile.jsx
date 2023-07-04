import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actions1 } from '../reducer/testReducer';


const Profile = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => (state.log.isLoggedin));
    const testFunction = () => {
        dispatch(actions1.toggleIsLoggedIn(!state));
    }
  return (
    <div>
        <button onClick={testFunction}> 로그가 바껴야함 </button>
        {/* {isLoggedin?isLoggedin:"undefined"} */}
    </div>
  )
}

export default Profile