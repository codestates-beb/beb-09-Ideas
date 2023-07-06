import React from 'react'
import styled from 'styled-components'

const PostDiv = styled.div`
    background: #97e1e4;
    height: 500px;
    margin: 30px;
`; 
const PostTitleDiv = styled.h3`
    padding:30px;
`; 

const PostContentDiv = styled.div`
    padding-left:30px;

`; 

const Post = () => {
  return (
    <PostDiv>
        <PostTitleDiv>
            Challenges And Security Issues In Consensus Algorithm
        </PostTitleDiv>
        <PostContentDiv>
            Most Notable Consensus Algorithms
The basic explanation of consensus mechanism fundamentals alongside their goals proves their importance in the blockchain landscape. Now, you need to review every consensus algorithm example for a better understanding of the potential challenges associated with them. You can find two distinct types of consensus algorithms, such as proof-based and voting-based consensus algorithms. 

Proof-based algorithms focus on nodes performing computation for generating proof to earn the right to mine new blocks on the chain in return for rewards. On the other hand, voting-based consensus algorithms focus on the participation of selected verifiers in the validation and addition of new blocks. Here is an outline of the popular consensus algorithms you would come across in the world of blockchain.
        </PostContentDiv>
    </PostDiv>
  )
}

export default Post