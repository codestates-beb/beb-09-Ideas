import React from 'react'
import styled from 'styled-components'
import PostList from './PostList';
import { useSelector } from 'react-redux';

const PostMainDiv = styled.div`
    /* background: #f4e3f5; */
    /* height: 500px;
    margin: 50px; */
    display: block;
    margin-bottom: 0;
    h3 {
        padding: 20px;
    }
`; 


const PostMain = () => {
  const userData = useSelector(state=>(state.userProfile));
  return (
    <PostMainDiv>
        <h3> {userData?.user_name} <span style={{fontWeight:"normal"}}>&nbsp; uploaded {userData?.userBoard?.length} post </span></h3> 
        <hr/>
        <PostList/>
    </PostMainDiv>
  )
}

export default PostMain