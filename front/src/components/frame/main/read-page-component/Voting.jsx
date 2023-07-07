import React from 'react'
import styled from '@emotion/styled'

const VotingView = styled.div`
    width: 100%;
    margin: 5px;
`;

const TitleView = styled.div`
    display: block;
    text-align: left;
    margin: 25px;
    padding: 10px;
    font-size: 20px;
    font-weight: bolder;
`;

const VoteView = styled.div`
  position: block;
  margin-left: 15px;
  text-align: left;
`;

const Voting = () => {
  return (
    <VotingView>
     <TitleView>
        Vote
     </TitleView>
     <VoteView>
      123123123
     </VoteView>
    </VotingView >
  )
}

export default Voting 
