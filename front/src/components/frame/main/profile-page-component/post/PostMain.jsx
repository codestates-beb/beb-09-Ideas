import React from 'react'
import styled from 'styled-components'
import PostList from './PostList';

const PostMainDiv = styled.div`
    /* background: #f4e3f5; */
    height: 500px;
    margin: 50px;
    h3 {
        padding: 20px;
    }
`; 


const PostMain = ( {profiledata} ) => {
  
  return (
    <PostMainDiv>
        <h3> {profiledata?.id?.data.userData.user_name} <span style={{fontWeight:"normal"}}>&nbsp; uploaded {profiledata?.id?.data.userBoard.length} post </span></h3> 
        <hr/>
        <PostList profiledata={profiledata}/>
    </PostMainDiv>
  )
}

export default PostMain