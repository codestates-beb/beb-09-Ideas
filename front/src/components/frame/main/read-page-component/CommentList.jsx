import React, { useState } from 'react'
import styled from '@emotion/styled'
import TextField from '@mui/material/TextField';
import Comment from './Comment';

const CommentView = styled.div`
  margin: 25px;
  padding: 10px;
  margin-top: 50px;
  text-align: left;
`;

const TextView = styled.div`
  margin-top: 15px;
`;

const CommentListDiv = styled.div`
    
`;

const CommentList = () => {
  const [userComment, setUserComment] = useState('');



  return (
    <CommentView>
      87 comment
      <TextView>
        <TextField
          label="Comment"
          required
          fullWidth
          id="name"
          value={userComment}
          onChange={e => setUserComment(e.target.value)}
        />
      </TextView>
      <CommentListDiv>
        <Comment/>
        <Comment/>
        <Comment/>
      </CommentListDiv>
    </CommentView>


  )
}

export default CommentList
