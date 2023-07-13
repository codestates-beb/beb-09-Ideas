import React from "react";
import styled from "styled-components";

import BoardList from "../../../frequently_used/BoardList";
import SideInfo from "./SideInfo";

const MainCompoDiv = styled.div`
  display: flex;
  margin-left: 15px;
`;

const MainPageComponent = ({ boards, rankingData }) => {
  return (
    <MainCompoDiv>
      <BoardList boards={boards} />
      <SideInfo rankingData={rankingData} />
    </MainCompoDiv>
  );
};

export default MainPageComponent;
