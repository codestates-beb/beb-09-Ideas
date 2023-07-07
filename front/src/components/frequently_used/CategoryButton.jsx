import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';



const CategoryButtonDiv = styled.div `
    border-radius: 5px;
    height: 30px;
    /* background: rgb(139,157,179); */
    display:flex;
    align-items:center;
    justify-content: center;
    cursor: pointer;
    font-size: 10px;
    margin-top:40px;
    flex-basis: 40px;
    width: 75px;
    border: 2px solid #77b9ca;
    h3 {
        color:rgb(100, 99, 99);
        font-size: 13px;
    }
    &:hover {
        background: rgba(208, 226, 231, 0.8);
    }
`;

const CategoryButton = ({text1, path}) => {
    const nav = useNavigate();
    const handleNextPage = () => {
        nav(path)
    }

  return (
    <CategoryButtonDiv onClick={handleNextPage}>
        <h3>{text1}</h3>
    </CategoryButtonDiv>
  )
}

export default CategoryButton