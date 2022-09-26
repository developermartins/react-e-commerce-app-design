import React from 'react';
import styled from 'styled-components';
import CatgoryItem from './CatgoryItem';

import { categories } from '../mock/data';
import { mobile } from '../responsive';

const Categories = () => {
  return (
    <Container>
        { categories.map((item) => (
            <CatgoryItem item={ item } key={ item.id } />
        )) }
    </Container>
  );
};

const Container = styled.section`
    display: flex;
    padding: 20px;
    justify-content: space-between;

    ${mobile({ padding: "0px", flexDirection: "column" })};
`;

export default Categories;
