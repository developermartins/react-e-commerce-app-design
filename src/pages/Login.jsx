import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username" />
                <Input placeholder="Password" />
                <Button>Login</Button>
                <Link>Forgot password?</Link>
                <Link>Create a new account</Link>
            </Form>
        </Wrapper>
    </Container>
  );
};

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient( 
        rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)),
      url("https://i.ibb.co/LCnFL1B/indoor-studio-photo-elegant-brunette-woman-stylish-dress-standing-urban-concrete-wall.jpg") 
      center;
    background-size: cover;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 2.4rem;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    margin-bottom: 10px;
    cursor: pointer;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 1rem;
    text-decoration: underline;
    cursor: pointer;
`;

export default Login;