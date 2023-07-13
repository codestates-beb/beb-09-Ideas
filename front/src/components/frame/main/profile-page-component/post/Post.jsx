import React from 'react'
import styled from 'styled-components'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
const PostDiv = styled.div`
    /* background: #97e1e4; */
    margin: 15px;
    cursor: pointer;
    &:hover {
        background: #f5f5f5;
        opacity: 0.8;
    }
`;
const PostTitleDiv = styled.h3`
    padding:30px;
    border-bottom: solid;
`;

const PostContentDiv = styled.div`
    padding-left:30px;
`;

const Post = ({board}) => {
    return (
            <PostDiv>
                <Accordion>
                <AccordionSummary>
                    <PostTitleDiv>
                        {board.title}
                    </PostTitleDiv>
                </AccordionSummary>
                <AccordionDetails>
                    <PostContentDiv>
                        {board.content}
                    </PostContentDiv>
                </AccordionDetails>
                </Accordion>
            </PostDiv>
    )
}

export default Post