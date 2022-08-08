import tw from 'tailwind-styled-components';
import styled from 'styled-components';



const Container = styled.div`
        @media (min-width:600px){
          max-width:1000px;
          margin:0 auto;
        }
`;

const SubContainer = styled.div`
    width:100%;
    height:100vh;
    display: flex;
    flex-direction: column;

    @media (min-width:600px){
      height: initial;
      max-width:620px;
      margin:0 auto;
      margin-top:50px;
      box-shadow: 4px 8px 40px 8px rgba(88, 146, 255, 0.2);
    }
`


const Wrapper = styled.div`
    padding :30px;
    text-align:center;
`

const BigHeader = styled.h1`
    font-family: 'Kaushan Script', cursive;
    font-size:4em;
    letter-spacing:3px;
    color:#5892FF ;
    margin:0;
    margin-bottom:20px;
    @media (min-width:360px){
        font-size:4.5em;
    }
`

const Description = styled.p`
    margin:0;
    font-size:1.3em;
    color:#aaa;
    font-family: 'Source Sans Pro', sans-serif;
    letter-spacing:1px;
`

const GoHomeButton = tw.button`
   inline-flex 
   items-center 
   mt-8 
   px-4 
   py-2 
   border 
   border-gray-300 
   shadow-sm 
   font-medium 
   rounded-md 
   text-gray-700 
   bg-white 
   hover:bg-gray-50 
   focus:outline-none 
   focus:ring-2 
   focus:ring-offset-2 
   focus:ring-indigo-500 
   sm:text-sm
`


const Styled = {
  Container,
  SubContainer,
  Wrapper,
  BigHeader,
  Description,
  GoHomeButton
};

export default Styled;
