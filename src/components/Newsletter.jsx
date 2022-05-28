import styled from "@emotion/styled";
import { SendOutlined } from "@material-ui/icons";
import React from "react";

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    font-size:70px;
    margin-bottom: 20px;

`;
const Description = styled.p`
    margin-bottom: 20px;
    font-weight:300;
    font-size: 24px;

`;
const InputContainer = styled.div`
    width:50%;
    height:40px;
    background-color: white;
    display:flex;
    justify-content:space-between;
    border: 1px solid lightgray;
    /* align-items:center; */
`;
const Input = styled.input`
    border: none;
    flex: 8;
    text-indent: 10px;
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color:teal;
    color:white;

`;

const Newsletter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Description>Get timely updates from your favourite products.</Description>
      <InputContainer>
        <Input placeholder="Your email"/>
        <Button>
          <SendOutlined />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
