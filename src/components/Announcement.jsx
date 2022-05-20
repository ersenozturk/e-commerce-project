import styled from '@emotion/styled'
import React from 'react'

const Container= styled.div`
  /* height: 30px; */
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
  font-weight: 500;
  height: 5vh;

`

const Announcement = () => {
  return (
    <Container>
    Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcement