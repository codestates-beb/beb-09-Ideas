import React, { useState } from 'react'
import styled from '@emotion/styled'
import TextField from '@mui/material/TextField';
import Comment from './Comment';
import { useDispatch, useSelector } from 'react-redux'; 
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { actions1 } from '../../../../reducer/testReducer';

const CommentView = styled.div`
  margin: 25px;
  padding: 10px;
  margin-top: 50px;
  text-align: left;
`;

const TextView = styled.div`
  margin-top: 15px;
  position:relative;
  
  button {
    position: absolute;
    right:10px;
    bottom:10px;
    border: 0px solid black;
    border-radius: 30px;
    background: #8cd5fa;
    color:white;
    &:hover{
        border: 1px solid black;
        cursor: pointer;
    }
  }
`;

const CommentListDiv = styled.div`
    
`;

const CommentList = () => {
  const dispatch = useDispatch();
  const [userComment, setUserComment] = useState('');
  const {id} = useParams();
  const comments = useSelector(state=>(state?.board.comments));
  console.log(comments);
  const userId = useSelector(state=>state?.myProfile?.userData.db_id);
  const handleSubmitCommentAPI = async () => {
    if(!userId) {
        alert('Login first before sending comment');
        return;
    }
    try{
        const response = await axios.post('/board/comment', {user_id:userId, board_id:id, content:userComment}, {
                headers: {
                    "Content-Type":"application/json",
            
                },
            });
        if(response.status === 200) {            
            dispatch(actions1.addComment(response.data.data));
            setUserComment("");
        }
    }catch(err){
        console.log(err);
    }
    
  }
  return (
    <CommentView>
      {comments?.length} comment
      <TextView>
        <TextField
          label="Comment"
          required
          fullWidth
          multiline
          rows={6}
          id="name"
          value={userComment}
          onClick={()=>{}}
          onChange={e => setUserComment(e.target.value)}
        />
        <button onClick={handleSubmitCommentAPI}>create</button>
      </TextView>
      <CommentListDiv>
        {comments?.map(comment=>(
            <Comment comment={comment}/>
        ))}        
      </CommentListDiv>
    </CommentView>


  )
}

export default CommentList
