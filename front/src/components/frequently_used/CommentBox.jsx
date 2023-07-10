import React from 'react';
import styled from 'styled-components';


const CommentDiv = styled.div`
    position: relative;
    border: 1px solid black;
    height:200px;
    width: 100%;
    border-radius: 15px;
    margin-bottom: 40px;
`;

const AutorDiv = styled.div`
    font-size:15px;
    font-weight: bold;
    padding: 10px;
    span {
        font-weight: normal;
    }
`;

const ContentDiv = styled.div`
    font-size:15px;
    padding: 10px;
`;

const BottomDiv = styled.div`
    position: absolute;
    bottom: 10px;
    width:100%;
    
`;

const ThumbDiv = styled.div`
    position:relative;
    float:right;
    right:10px;
    display:flex;
    div {
        margin-left: 10px;
    }
`;

const CommentBox = () => {
  return (
    <CommentDiv>
        <AutorDiv>
            Autor <span> &nbsp; 24 hours ago </span>
        </AutorDiv>
        <ContentDiv >
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </ContentDiv>
        <BottomDiv>
            <span>comment</span>
            <ThumbDiv>
                <div>up : 42</div>
                <div>down : 14</div>
            </ThumbDiv>
        </BottomDiv>
    </CommentDiv>
    
    
  )
}

export default CommentBox