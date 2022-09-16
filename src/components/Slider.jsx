import React from 'react';
import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowBackIosNewOutlinedIcon />
        </Arrow>
        <Wrapper>
            <ImageContainer>
                <Image src='https://i.ibb.co/cXFnLLV/3.png' />
            </ImageContainer>
        </Wrapper>
        <Arrow direction="right">
            <ArrowForwardIosOutlinedIcon />
        </Arrow>
    </Container>
  );
};

const Container = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`;

const Arrow = styled.div`
    background-color: #f7f0e3;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${ props => props.direction === 'left' && '10px' };
    right: ${ props => props.direction === 'right' && '10px' };;
    margin: auto;
    cursor: pointer;
    opacity: 0.7;
`;

const Wrapper = styled.div`
    height: 100%;
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
`;

const ImageContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`

`;

const InfoContainer = styled.div`
    flex: 1;
`;

export default Slider;
