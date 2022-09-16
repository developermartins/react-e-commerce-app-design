import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
        <Wrapper>
            <Left>
                <Language>PT</Language>
                <SearchContainer>
                    
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
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
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

`;


export default Navbar;
