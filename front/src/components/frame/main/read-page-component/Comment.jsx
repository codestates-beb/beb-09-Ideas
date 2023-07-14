import React, { useState } from 'react'
import styled from '@emotion/styled'


const NameTimeView = styled.div`
   margin: 10px;
`;

const DescriptionView = styled.div`
  margin: 20px;
`;


const BottomDiv = styled.div`
    display:flex;
    align-items: center;
    justify-items: center;
    justify-content: space-between;
`;
const LeftDiv = styled.div`
    display:flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    width:100px;
    height:30px;
    border-radius: 15px;
    &:hover{
        cursor: pointer;
        background: rgba(210,210,210,0.2);
    }

`;

const RightDiv = styled.div`
    display:flex;
    align-items: center;
    justify-items: center;
    width:200px;
    justify-content: space-around;
    div > button {
        border: 0;
        border-radius: 30px;
        background: transparent;
        width:30px;
        height:30px;
        font-size: 20px;
        margin: auto;
        padding:0;
        &:hover {
            background: rgba(210,210,210,0.2);
            cursor: pointer;
        }
    }
    div > p {
        font-size: 20px;
    }
    div {
        display:flex;
    }
`;

const Comment = ({comment}) => {

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
    <>
        <hr />
        <NameTimeView>
            <span style={{fontWeight:'bold', fontSize:'18px'}}>{comment.user.user_name}</span> <span style={{fontSize:"12px"}}>{comment.created_at}</span>
        </NameTimeView>

        <DescriptionView>
            {comment.content}
        </DescriptionView>
        <BottomDiv>
            <LeftDiv>
                <div>
                    0 comment
                </div>
            </LeftDiv>
            <RightDiv>
                <div>
                    <button>👍</button>
                    <p style={{color:'blue'}}>0</p>
                </div>
                <div>
                    <button>👎</button>
                    <p style={{color:'red'}}>0</p>
                </div>
            </RightDiv>
        </BottomDiv>
    </>


  )
}

export default Comment
