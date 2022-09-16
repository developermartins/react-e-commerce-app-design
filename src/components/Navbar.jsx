import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <Nav>
        <Wrapper>
            <Left>
                <Language>PT</Language>
                <SearchContainer>
                    <Input />
                    <SearchIcon />
                </SearchContainer>
            </Left>
            <Center>Center</Center>
            <Right>Right</Right>
        </Wrapper>
    </Nav>
  );
};

const Nav = styled.nav`
    height: 60px;
`;

const Wrapper = styled.section`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Center = styled.div`
    flex: 1;
`;

const Right = styled.div`
    flex: 1;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    outline: none;
`;


export default Navbar;
