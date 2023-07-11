import React from 'react'
import styled from 'styled-components'

const PostDiv = styled.div`
    /* background: #97e1e4; */
    height: 300px;
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

const Post = ({board}) => {
    return (
        <PostDiv>
            <PostTitleDiv>
                {board.title}
            </PostTitleDiv>
            <PostContentDiv>
                {board.content}
            </PostContentDiv>
        </PostDiv>
    )
}

export default Post