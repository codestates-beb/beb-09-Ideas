import React from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux';
import { FaBookReader, FaRobot } from 'react-icons/fa'
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { BiSolidLockOpenAlt } from 'react-icons/bi';
import { BsFillBootstrapFill, BsFillCloudsFill, BsPersonWorkspace } from 'react-icons/bs';

const StatusView = styled.div`
    display:grid;
    grid-column-gap: 10px;
    grid-template-columns: repeat(8, 1fr);
    position:relative;
`;

const TopStatus = () => {

    const score = useSelector(state=>(state?.board?.board_score));

  return (
    <StatusView>
      <div><FaBookReader size="25px" /> : {score?.management.score}</div>
      <div><RiMoneyDollarCircleFill size="25px" /> : {score?.economy.score}</div>
      <div><BiSolidLockOpenAlt size="25px" /> : {score?.security.score}</div>
      <div><FaRobot size="25px" />  :  {score?.ai.score}</div>
      <div><BsFillBootstrapFill size="25px" />  :  {score?.blockchain.score}</div>
      <div><BsFillCloudsFill size="25px" />  : {score?.cloud.score}</div>
    </StatusView>
  )
}

export default TopStatus
