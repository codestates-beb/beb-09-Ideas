import React from 'react'
import styled from 'styled-components'
import Post from './Post';
import { useSelector } from 'react-redux';



const PostList = () => {
    const userBoard = useSelector(state=>(state.userProfile?.userBoard));
    
  return (
    <div>
        {userBoard?.map(board=>(<Post board={board}/>))}
    </div>
  )
}

export default PostList