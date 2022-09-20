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

const Container = styled.section``;

export default Products;
