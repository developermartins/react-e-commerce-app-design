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

const Container = styled.section``;

export default Categories;
