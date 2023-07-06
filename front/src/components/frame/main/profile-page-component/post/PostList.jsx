import React from 'react'
import styled from 'styled-components'
import Post from './Post';

const PostListDiv = styled.div`
    background: #f1f6f7;
    height: 1000px;
    margin-top: 50px;
`; 

const PostList = () => {
  return (
    <PostListDiv>
        profileList
        <Post/>
        <Post/>
    </PostListDiv>
  )
}

export default PostList