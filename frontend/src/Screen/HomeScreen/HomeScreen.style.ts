import styled from 'styled-components'
import tw from 'tailwind-styled-components'



const CardContainer = tw.div`
max-w-md 
py-4 px-8 
bg-white 
shadow-lg 
rounded-lg my-20
`

const ImgWaraaper = tw.div`
flex 
justify-center 
md:justify-end 
mt-16 
`

const MainImg = tw.img`
        w-20 
        h-20 
        object-cover 
        rounded-full 
        border-2 border-indigo-500
`

const TextInfo = tw.div`
`


const HeaderText = tw.h2`
    text-gray-800 
    text-3xl 
    font-semibold
`

const DescriptionText = tw.div`
mt-2 
text-gray-600
`

const BottemWaraaper = tw.div`
    flex 
    justify-end 
    mt-4
`

const PriceHeader = tw.span`
    text-xl 
    font-medium 
    text-indigo-500
`


// const LabelSideCss = styled.span`
//       font-size:20px;
//       font-family: 'Rubik';
//       font-weight:400;
// `;

// const LabelSide = tw(LabelSideCss)`
//      flex
//      flex-col-reverse   
// `;

const Styled = {
    CardContainer,
    ImgWaraaper,
    MainImg,
    TextInfo,
    HeaderText,
    DescriptionText,
    BottemWaraaper,
    PriceHeader
    
}

export default Styled