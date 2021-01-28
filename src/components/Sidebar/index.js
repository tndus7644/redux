import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import cn from 'classnames';

const Sidebar = () => {

    const {sidebar} = useSelector(state => state);

    return(
        <Container className={cn("sidebar", {show:sidebar})}>
            Sidebar
        </Container>
    )
}

const Container = styled.div`
  width: 300px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: #fff;
  box-shadow: 0 1px 10px rgba(0,0,0,0.1);
  transition: 0.3s;
  transform: translateX(-120%);
  &.show{
    transform: none;
  }
`;

export default Sidebar;