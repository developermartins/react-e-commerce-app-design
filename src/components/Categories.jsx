import React from 'react';
import styled from 'styled-components';
import CatgoryItem from './CatgoryItem';

import { categories } from '../mock/data';

const Categories = () => {
  return (
    <Container>
        { categories.map((item) => {
            <CatgoryItem item={ item } />
        }) }
    </Container>
  );
};

const Container = styled.section`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

export default Categories;
