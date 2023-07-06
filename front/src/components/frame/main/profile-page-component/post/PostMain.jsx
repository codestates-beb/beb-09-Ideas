import React from 'react'
import styled from 'styled-components'
import PostList from './PostList';

const PostMainDiv = styled.div`
    background: #f4e3f5;
    height: 500px;
    margin: 50px;
    h3 {
        padding: 20px;
    }
`; 


const PostMain = () => {
  return (
    <PostMainDiv>
        <h3>Zephyr <span style={{fontWeight:"normal"}}>&nbsp; uploaded 23 post </span></h3> 
        <hr/>
        <PostList/>
    </PostMainDiv>
  )
}

export default PostMain