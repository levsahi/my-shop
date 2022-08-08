import React from 'react'
import Styled from './Spinner.style'

const Spinner = () => {
  return (
    <Styled.SpinnerWarapper>
        <Styled.CircularProgresMateial size={ 200 } color="primary" />
    </Styled.SpinnerWarapper>
  )
}

export default Spinner