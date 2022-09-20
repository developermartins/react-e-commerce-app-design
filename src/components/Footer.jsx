import React from 'react';
import styled from 'styled-components';

import {
    Facebook,
    Instagram,
    Mail,
    Phone,
    Pinterest,
    Room,
    Twitter
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Marts.</Logo>
            <Desc>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam perferendis est quae libero? 
                Eius aspernatur, molestiae soluta facilis vel iure.
            </Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <Facebook />
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram />
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter />
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{ marginRight:"10px" }} /> Avenida Brigadeiro Faria Lima, 1993; Jardim Paulistano 
            </ContactItem>
            <ContactItem>
                <Phone style={{ marginRight:"10px" }} /> (96) 2462-6832
            </ContactItem>
            <ContactItem>
                <Mail style={{ marginRight:"10px" }} /> contact@marts.dev
            </ContactItem>
        </Right>
    </Container>
  );
};

const Container = styled.footer`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;


const Center = styled.div`
    flex: 1;
    padding: 20px;
`;


const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const Logo = styled.h1``;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

export default Footer;