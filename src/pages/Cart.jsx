import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcements from '../components/Announcements';

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcements />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButtom>CONTINUE SHOPPING</TopButtom>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButtom type='filled'>CHECKOUT NOW</TopButtom>
            </Top>
            <Bottom></Bottom>
        </Wrapper>
        <Footer />
    </Container>
  );
};

const Container = styled.section`

`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButtom = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' && 'none'};
    background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${props => props.type === 'filled' && 'white'};
`;

const Bottom = styled.div`

`;

const TopTexts = styled.div``;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

export default Cart;
