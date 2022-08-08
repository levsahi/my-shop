import React, { useContext, useEffect, useState } from 'react'
import {Product} from '../../interface/Product'
import axios from 'axios'
import { ROUTES, URLS } from '../../enum/urls'
import TextField from '@mui/material/TextField';
import Styled from './HomeScreen.style'
import useFetch from '../../hooks/useFetch';
import Spinner from '../../Components/Form/Spinner/Spinner';
import Navigation from '../../Components/Navigation/Navigation';
import { Link } from 'react-router-dom';
import { METHODS } from '../../enum/methos';

const HomeScreen = () => {
  

  const {data:products,isLoading} = useFetch({
    method: METHODS.GET,
    url:`${URLS.BACKEND_URL}/${URLS.PRODUCTS}`
  })

  
  const renderProducts = ()=> (
    products.map((product:Product) => {
          const {id,name,img,description,price} =product

          return (
            <Link to={`${ROUTES.PRODUCT}/${id}`} key={id}>
              <Styled.CardContainer>
                    <Styled.ImgWaraaper>
                        <Styled.MainImg src={img} />
                    </Styled.ImgWaraaper>
                    <Styled.TextInfo>

                        <Styled.HeaderText>{name}</Styled.HeaderText>
              
                      <Styled.DescriptionText>{description}</Styled.DescriptionText>
                    </Styled.TextInfo>
                    <Styled.BottemWaraaper>
                      <Styled.PriceHeader>{price}</Styled.PriceHeader>
                    </Styled.BottemWaraaper>
              </Styled.CardContainer >
          </Link>
        )
    }
    )
  )




  return (
    <>
       {isLoading ? 
         <Spinner />
       :
       <>
         <div className="flex justify-center flex-wrap justify-evenly max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderProducts()}
        </div>
        
        </>
       }
    </>
  );
}

export default HomeScreen