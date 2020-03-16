import React from 'react';
import {ThemeProvider} from 'styled-components'
import {StyledHotelAddress} from './styled'

const HotelAddress = (props) => {

  const {
    children
  } = props;

  const theme = {}

  return (
      <ThemeProvider theme={theme}>
        <StyledHotelAddress>
          {children}
        </StyledHotelAddress>
      </ThemeProvider>
  )
}

export default HotelAddress;
