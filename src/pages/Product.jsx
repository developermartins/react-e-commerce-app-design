import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Announcements from '../components/Announcements';

import { Add, Remove } from '@mui/icons-material';

const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcements />
        <Wrapper>
            <ImgContainer>
                <Image src='https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png' />
            </ImgContainer>
            <InfoContainer>
                <Title>Women-Jacket</Title>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos quas amet nisi quia fugiat cumque 
                    reiciendis adipisci voluptas iusto rem, facilis voluptate, minima distinctio! 
                    Dolores temporibus minima voluptatibus quaerat.
                </Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="darkblue" />
                        <FilterColor color="gray" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove style={{ cursor:"pointer" }} />
                        <Amount>1</Amount> 
                        <Add style={{ cursor:"pointer" }} />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  );
};

const Container = styled.section`

`;

const Wrapper = styled.div`
    display: flex;
    padding: 50px;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 200;
    font-size: 3rem;
    margin-top: 30px;
    margin-bottom: 40px;
`;

const Desc = styled.p`
    margin: 20px 0px;
    font-size: 1.4rem;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 2.5rem;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 1.5rem;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: #f8f4f4;
    }
`;

export default Product;
