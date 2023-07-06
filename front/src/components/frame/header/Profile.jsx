import { useState, useEffect } from "react";
import styled from "styled-components";
import Menu from "./Menu";

const ProfileDiv = styled.div`
      &:hover { 
        div {
            visibility: visible;
            animation: appear 0.3s forwards;
            top:120px;
            opacity: 0;
            
        }
      @keyframes appear {
                100% {
                    top:60px;
                    opacity: 100%;
                }
            }
        }
`;


const Profile = ({handleLogout}) => {

  return (
    <ProfileDiv>
        <img src="profile.png" alt="profile" width="60px" height="60px" />
        <Menu handleLogout={handleLogout}/>
    </ProfileDiv>
  );
};

export default Profile;
