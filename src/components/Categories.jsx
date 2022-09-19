import React from 'react';
import styled from 'styled-components';

import { categories } from '../mock/data';
import CatgoryItem from './CatgoryItem';

const Categories = () => {
  return (
    <Container>
        { categories.map((item) => {
            <CatgoryItem item={ item } />
        }) }
    </Container>
  );
};

const Container = styled.section``;

export default Categories;
