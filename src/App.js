import React from 'react';
import styled from 'styled-components';
import Header from "./components/Header";
import Home from "./pages/Home";
import {GlobalStyle} from "./Styled/Common.Styled";
import Sidebar from "./components/Sidebar";
import {useSelector} from "react-redux";

const App = () => {

    const state = useSelector(state => state);

    return(
        <Container>
            <GlobalStyle/>
            <Header/>
            <Sidebar/>
            <Home/>
        </Container>
    )
}

const Container = styled.div`

`;

export default App;