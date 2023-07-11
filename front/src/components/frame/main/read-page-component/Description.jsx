import React from 'react'
import styled from '@emotion/styled'

const DescriptionDiv = styled.div`
    
    text-align: center;
`;

const Description = () => {
  return (
    <div>
      <DescriptionDiv>
      This is the second article in a series dedicated to Deep Learning, a group of Machine Learning methods that has its roots dating back to the 1940’s. Deep Learning gained attention in the last decades for its groundbreaking applications in areas like image classification, speech recognition, and machine translation

But lots of real-world problems involve a time dimension. What about when the problem at hand comes in the form of a sequence?

.......
      </DescriptionDiv>
    </div>
  )
}

export default Description
