import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: auto;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled(Link)`
  text-decoration: none;
  padding: 20px;
  font-size: 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
  transition: background-color 0.3s ease;
  height: 350px;
  width: 350px;

  &:hover {
    background-color: #4caf50;
  }

  @media (max-width: 768px) {
    height: 250px;
    width: 250px;
  }
`;

const LoginButton = styled(Button)`
  background-color: #3498db;
  color: #fff;


  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const SignupButton = styled(Button)`
  background-color: #e74c3c;
  color: #fff;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const ButtonIcon = styled.img`
  width: 320px;
  height: 320px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px; // Add some margin to separate the buttons and the text

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const GetStartedButton = styled(Link)`
  text-decoration: none;
  padding: 20px;
  font-size: 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
  transition: background-color 0.3s ease;
  height: 350px;
  width: 350px;

  &:hover {
    background-color: #4caf50;
  }

  @media (max-width: 768px) {
    height: 250px;
    width: 250px;
    margin-top: 20px;
  }
`;

const LoginSignUpPage = () => {
  return (
    <PageContainer>
      <ButtonContainer>
        <ButtonRow>
          <LoginButton to="/login" className="login-button">
            <ButtonIcon src="https://i.pinimg.com/236x/ed/d0/47/edd047f75adb53d77af9d51efa08416d.jpg" alt="Login Icon" />
          </LoginButton>
          <SignupButton to="/select" className="signup-button">
            <ButtonIcon src="https://tse4.mm.bing.net/th?id=OIP.5S4MKDPF0CIsNv8DH4Kw-QAAAA&pid=Api&P=0&h=180" alt="Signup Icon" />
          </SignupButton>
        </ButtonRow>
      </ButtonContainer>
      
    </PageContainer>
  );
};

export default LoginSignUpPage;