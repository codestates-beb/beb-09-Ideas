import React from 'react'
import styled from '@emotion/styled'

const StatusView = styled.div`
    float: left;
    margin-left: 25px;
    padding: 5px;
`;

const TopStatus = () => {
  return (
    <StatusView>
        Manage: 38 Economy: 8 Security : 22 AI : 113 Blockchain : 0 Cloud : 0
    </StatusView>      
  )
}

export default TopStatus
