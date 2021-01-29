import React from 'react';
import styled from 'styled-components';

const Home = () => {

    return (
        <Container className={'Home'}>
            <h1>Count</h1>
            <Count>5</Count>
            <ButtonGroup>
                <Button>UP</Button>
                <Button>DOWN</Button>
            </ButtonGroup>
        </Container>
    )
}

const Container = styled.div`
  text-align: center;
  padding-top: 50px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Count = styled.div`
    margin: 20px 0;
`;

const Button = styled.div`
  width: 80px;
  height: 30px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: #ddd;
  }
  
  & + &{
    margin-left: 20px;
  }
`;

export default Home;