import React from 'react';

import { Send } from '@mui/icons-material';

const Newsletter = () => {
  return (
    <Container>
        <Title></Title>
        <Description></Description>
        <InputContainer>
            <Input />
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  );
};

export default Newsletter;
