import React from 'react';
import styled from 'styled-components';

import { mobile } from '../responsive';

const CatgoryItem = ({ item }) => {
  return (
    <Container>
        <Image src={ item.img } />
        <Info>
            <Title>{ item.title }</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  );
};

const Container = styled.section`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${mobile({ height: "30vh" })};
`;

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    font-size: 2.5rem;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`;

export default CatgoryItem;
