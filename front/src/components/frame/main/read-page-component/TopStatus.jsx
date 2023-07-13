import React from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'; 


const StatusView = styled.div`
    float: left;
    margin-left: 25px;
    padding: 5px;
`;

const TopStatus = () => {
    const score = useSelector(state=>(state?.board?.board_score));
    
  return (
    <StatusView>
        {`Manage: ${score?.management.score} Economy: ${score?.economy.score} Security : ${score?.security.score} AI : ${score?.ai.score} Blockchain : ${score?.blockchain.score} Cloud : ${score?.cloud.score}`}
    </StatusView>      
  )
}

export default TopStatus
