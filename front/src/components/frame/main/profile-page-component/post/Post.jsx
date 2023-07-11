import React from 'react'
import styled from 'styled-components'

const PostDiv = styled.div`
    /* background: #97e1e4; */
    height: 500px;
    margin: 30px;
    cursor: pointer;
    &:hover {
        background: #f5f5f5;
        opacity: 0.8;
    }
`;
const PostTitleDiv = styled.h3`
    padding:30px;
`;

const PostContentDiv = styled.div`
    padding-left:30px;

`;

const Post = ({ profiledata }) => {
    console.log(profiledata?.id?.data);
    return (
        <PostDiv>
            {profiledata?.id?.data?.userBoard?.map(element => (
                <PostTitleDiv key={element}>{element.title} {element.content}</PostTitleDiv>
                 
            ))}
         
        </PostDiv>
    )
}

export default Post