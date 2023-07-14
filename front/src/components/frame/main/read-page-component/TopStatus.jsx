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
      <div><FaBookReader size="25px" /> : {parseFloat(score?.management.score.toFixed(3))}</div>
      <div><RiMoneyDollarCircleFill size="25px" /> : {parseFloat(score?.economy.score.toFixed(3))}</div>
      <div><BiSolidLockOpenAlt size="25px" /> : {parseFloat(score?.security.score.toFixed(3))}</div>
      <div><FaRobot size="25px" />  :  {parseFloat(score?.ai.score.toFixed(3))}</div>
      <div><BsFillBootstrapFill size="25px" />  :  {parseFloat(score?.blockchain.score.toFixed(3))}</div>
      <div><BsFillCloudsFill size="25px" />  : {parseFloat(score?.cloud.score.toFixed(3))}</div>
    </StatusView>
  )
}

export default TopStatus
