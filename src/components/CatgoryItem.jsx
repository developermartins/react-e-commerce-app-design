import React from 'react';
import styled from 'styled-components';

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

const Container = styled.section``;

const Image = styled.img``;

const Info = styled.div``;

const Title = styled.h2``;

const Button = styled.button``;

export default CatgoryItem;
