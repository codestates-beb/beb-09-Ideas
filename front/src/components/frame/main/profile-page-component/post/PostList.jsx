import React from 'react'
import styled from 'styled-components'
import Post from './Post';
import { useSelector } from 'react-redux';


const PostListDiv = styled.div`
    /* background: #f1f6f7; */
    height: 1000px;
    margin-top: 50px;
`; 

const PostList = () => {
    const userBoard = useSelector(state=>(state.userProfile?.userBoard));
    
  return (
    <PostListDiv>
        {userBoard?.map(board=>(<Post board={board}/>))}
    </PostListDiv>
  )
}

export default PostList