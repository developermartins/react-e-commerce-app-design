import React from 'react';
import styled from 'styled-components';

import { Send } from '@mui/icons-material';

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products.</Description>
        <InputContainer>
            <Input placeholder='Your email' />
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  );
};

const Container = styled.section``;

const Title = styled.h1``;

const Description = styled.div``;

const InputContainer = styled.div``;

const Input = styled.input``;

const Button = styled.button``;

export default Newsletter;
