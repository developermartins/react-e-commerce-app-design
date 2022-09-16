import React, { useState } from 'react';

import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { sliderItems } from '../mock/data';

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={ () => handleClick("left") }>
            <ArrowBackIosNewOutlinedIcon />
        </Arrow>
        <Wrapper slideIndex={ slideIndex }>
           {
            sliderItems.map((item) => (
                <Slide bg={ item.bg }>
                    <ImageContainer>
                        <Image src={ item.img } />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{ item.title }</Title>
                        <Description>{ item.desc }</Description>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
            ))
           }
        </Wrapper>
        <Arrow direction="right" onClick={ () => handleClick("right") }>
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
    overflow: hidden;
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
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${ props => props.bg };
`;

const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 80%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 5rem;
`;

const Description = styled.p`
    margin: 50px 0;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 1.5rem;
    background-color: transparent;
    cursor: pointer;
`;

export default Slider;
