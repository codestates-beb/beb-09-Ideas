import React, {useState} from 'react';
import styled from 'styled-components';

const SubMenuDiv = styled.div`
    background: ${({selected})=>(selected?'green':'white')};
    width:100%;
    height:35px;
        
`;

const SubMenu = () => {
    const [selected, setSelected] = useState(false);
  return (
    <SubMenuDiv selected={selected} onClick={()=>{setSelected(!selected)}}></SubMenuDiv>
  )
}

export default SubMenu