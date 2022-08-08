import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../enum/urls';
import Styled from './ThankYouScreen.style'

const ThankYouScreen = () => {
  const navigate = useNavigate();

  return (
    <Styled.Container>
        <Styled.SubContainer>
           <Styled.Wrapper>
                <Styled.BigHeader>Thank you !</Styled.BigHeader>
                <Styled.Description>Thanks for subscribing to our news letter.</Styled.Description>
                <Styled.Description>you should receive a confirmation email soon</Styled.Description>
                <Styled.GoHomeButton 
                onClick={ () => navigate(ROUTES.HOME) }>
                    GO HOME
                </Styled.GoHomeButton>
           </Styled.Wrapper>
        </Styled.SubContainer>
    </Styled.Container>
  )
}

export default ThankYouScreen