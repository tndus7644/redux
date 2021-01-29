import React from 'react';
import styled from 'styled-components';
import {AiOutlineMenu} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/reducer";
import {useHistory} from "react-router";

const Header = () => {


    const dispatch = useDispatch();
    const {sidebar} = useSelector(state => state);
    console.log("sidebar", sidebar)
    const handleSidebar = () => {
        dispatch(Action.Creators.handleSidebar(!sidebar))
    }

    const history = useHistory();
    const navigate = (url) => {
        history.push(url)
    }

    return (
        <Container className={'Header'}>
            <Logo>Logo</Logo>
            <Gnb>
                <Nav>
                    <NavItem onClick={() => navigate("/")}>
                        Home
                    </NavItem>
                    <NavItem onClick={() => navigate("/todos")}>
                        Todos
                    </NavItem>
                    <NavItem onClick={() => navigate("/photos")}>
                        Photos
                    </NavItem>
                    <NavItem onClick={() => navigate("/videos")}>
                        Videos
                    </NavItem>
                </Nav>
                <MenuButton onClick={handleSidebar}>
                    <AiOutlineMenu/>
                </MenuButton>
            </Gnb>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background: #fff;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

const Gnb = styled.div`
  display: flex;
  height: 80px;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  cursor: pointer;
  padding: 0 20px;

  &:hover {
    color: #3971d7;
  }
`;

const MenuButton = styled.div`
  cursor: pointer;
  margin-left: 30px;
  align-items: center;
  display: flex;
`;

export default Header;