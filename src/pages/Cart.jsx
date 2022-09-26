import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcements from '../components/Announcements';

import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';

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
                    <TopText>Shopping Bag (1)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButtom type='filled'>CHECKOUT NOW</TopButtom>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png" />
                            <Details>
                                <ProductName><b>Product:</b> Women-Jacket</ProductName>
                                <ProductId><b>ID:</b> 0545668241468</ProductId>
                                <ProductColor color="brown" />
                                <ProductSize><b>Size:</b> S</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>1</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>$ 20</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 20</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 20</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  );
};

const Container = styled.section`

`;

const Wrapper = styled.div`
    padding: 20px;

    ${mobile({ 
        padding: "10px",
    })};
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
    display: flex;
    justify-content: space-between;

    ${mobile({ 
        flexDirection: "column",
    })};
`;

const TopTexts = styled.div`
    ${mobile({ 
        display: "none",
    })};
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Info = styled.div`
    flex: 3;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({ 
        flexDirection: "column",
    })};
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductColor = styled.div`
     width: 20px;
     height: 20px;
     border-radius: 50%;
     background-color: ${props => props.color};
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.span`
    font-size: 2.4rem;
    margin: 5px;

    ${mobile({ 
        margin: "5px 15px",
    })};
`;

const ProductPrice = styled.span`
    font-size: 3rem;
    font-weight: 300;

    ${mobile({ 
        marginBottom: "20px",
    })};
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "2rem"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;

export default Cart;
