import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';



const CategoryButtonDiv = styled.div `
    border-radius: 5px;
    height: 30px;
    /* background: rgb(139,157,179); */
    background-image: linear-gradient(to right, #ffffff, #e9f7f8);
    position:relative;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    cursor: pointer;
    font-size: 10px;
    margin-top:40px;
    flex-basis: 40px;
    width: 75px;
    border: 2px solid #77b9ca;
    box-shadow: 2px 2px 1px;
    overflow:hidden;
    h3 {
        position:absolute;
        color:rgb(97, 83, 83);
        font-size: 13px;
        display: block;
        &:hover {
            opacity: 0.8;
            
        }
    }
    &:hover {
        h3 {
            font-style: italic;
        }
        &>:nth-child(2) {
            position:absolute;
            height:5px;
            left:-20px;
            bottom:0;
            width:100%;
            background  : #c3e0e6;
            animation: hover 0.5s forwards;
        }
    }
    @keyframes hover {
        100% {
            left:100px;
        }   
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
        <div>.</div>
    </CategoryButtonDiv>
  )
}

export default CategoryButton