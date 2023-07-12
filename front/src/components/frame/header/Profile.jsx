import { useState, useEffect } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import { CgProfile } from "react-icons/cg"

const ProfileDiv = styled.div`
      &:hover { 
        div {
            visibility: visible;
            animation: appear 0.2s forwards;
            top:100px;
            opacity: 0;
            
        }
      @keyframes appear {
                100% {
                    top:55px;
                    opacity: 100%;
                }
            }
        }
`;


const Profile = ({handleLogout}) => {

  return (
    <ProfileDiv>
        <CgProfile  size={"40px"}/>
        <Menu handleLogout={handleLogout}/>
    </ProfileDiv>
  );
};

export default Profile;
