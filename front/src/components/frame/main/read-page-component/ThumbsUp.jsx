import React, { useState } from 'react'
import styled from '@emotion/styled'

const ThumsDiv = styled.div`
    width: 33%;
    display: inline-block;
    text-align: center;
    margin-top: 30px;
    margin-left: 30px;
    float: right;
    
`;
const ArrangementDiv = styled.div` //배치위한 div
  float: left;
`;

const ThumbsUp = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  }

  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1 );
  }

  return (
    <ThumsDiv>
      <ArrangementDiv>
        <button onClick={handleLike}>좋아요</button><p>{likeCount}</p>
      </ArrangementDiv>
      <div>
        <button onClick={handleDislike}>싫어요</button>  <p>{dislikeCount}</p>
      </div>
    </ThumsDiv>
    
  )
}

export default ThumbsUp
