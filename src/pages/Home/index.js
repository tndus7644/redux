import React,{useState} from 'react';
import styled from 'styled-components';

const Home = () => {

    const [count, setCount] = useState(5);

    const countUp = () => {
        setCount(v => v + 1);
    }

    const countDown = () => {
        setCount(v => v - 1);
    }

    return (
        <Container className={'Home'}>
            <h1>Count</h1>
            <Count>{count}</Count>
            <ButtonGroup>
                <Button onClick={countUp}>UP</Button>
                <Button onClick={countDown}>DOWN</Button>
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
  font-size: 20px;
  font-weight: bold;
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