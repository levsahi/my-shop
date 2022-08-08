import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import CircularProgress from '@mui/material/CircularProgress';

const Container = styled.div`
  padding-top: 70px;
`;

const CircularProgresMateial = styled(CircularProgress).attrs(() => ({
}))``;

const SpinnerWarapper = tw.div`
   flex 
   justify-center 
   h-screen 
   items-center
`;

const Styled = {
  Container,
  SpinnerWarapper,
  CircularProgresMateial,
};

export default Styled;