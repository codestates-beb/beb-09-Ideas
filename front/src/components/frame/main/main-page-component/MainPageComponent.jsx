import React from 'react'
import BoardList from '../../../frequently_used/BoardList'




const MainPageComponent = ({boards}) => {
  return (
    <>
        <BoardList boards={boards}/>
    </> 
  )
}

export default MainPageComponent