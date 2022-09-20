import React from 'react';
import styled from 'styled-components';
import Product from './Product';

import { popularProducts } from '../mock/data';

const Products = () => {
  return (
    <Container>
        { popularProducts.map((item) => (
            <Product item={ item } key={ item.id } />
        )) }
    </Container>
  );
};

const Container = styled.section`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export default Products;
