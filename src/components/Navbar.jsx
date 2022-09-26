import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { mobile } from '../responsive';

const Navbar = () => {
  return (
    <Nav>
        <Wrapper>
            <Left>
                <Language>PT</Language>
                <SearchContainer>
                    <Input placeholder='Search' />
                    <SearchIcon style={{ color: "gray", fontSize:16 }} />
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    Marts.
                </Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Nav>
  );
};

const Nav = styled.nav`
    height: 60px;

    ${mobile({ height: "50px" })};
`;

const Wrapper = styled.section`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${mobile({ padding: "10px 0px" })};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ${mobile({ flex: 2, justifyContent: "center" })};
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;

    ${mobile({ display: "none" })};
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

    ${mobile({ width: "50px" })};
`;

const Logo = styled.h1`
    font-weight: bold;
    font-size: 2.5rem;

    ${mobile({ fontSize: "1.4rem" })};
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;

    ${mobile({ fontSize: "0.7rem", marginLeft: "1rem" })};
`;

export default Navbar;
