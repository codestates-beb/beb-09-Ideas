import React, { useState } from 'react'
import styled from '@emotion/styled'
import TextField from '@mui/material/TextField';

const CommentView = styled.div`
  margin: 25px;
  padding: 10px;
  margin-top: 50px;
  text-align: left;
`;

const TextView = styled.div`
  margin-top: 15px;
`;

const NameTimeView = styled.div`
   margin: 10px;
`;

const DescriptionView = styled.div`
  margin: 10px;
`;

const CehckView = styled.div`
  margin-top: 25px;
  margin-left: 10px;
`;

const ArrangementDiv = styled.div` //배치위한 div
  display: flex;
  
  float: right;
`;

const Comment = () => {
  const [userComment, setUserComment] = useState('');
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  }

  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1 );
  }

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

      <hr />
        <NameTimeView>
        coding kim 2hour ago
        </NameTimeView>

        <DescriptionView>
        The vanishing and exploding gradient phenomena are often encountered in the context of RNNs. The reason why they happen is that it is difficult to capture long term dependencies because of multiplicative gradient that can be exponentially decreasing/increasing with respect to the number of layers.
    
        </DescriptionView>
    
        <CehckView>
        3 comment
        <ArrangementDiv>
        <button onClick={handleLike}>좋아요</button><p>{likeCount}</p>
        <button onClick={handleDislike}>싫어요</button>  <p>{dislikeCount}</p>
        </ArrangementDiv>
    
        </CehckView>

    </CommentView>


  )
}

export default Comment
