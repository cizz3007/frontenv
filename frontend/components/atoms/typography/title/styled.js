import styled, {css} from 'styled-components'
import {blackColor, fontWeightBold, fontWeightBolder, fontWeightNormal} from '@global/styleVariable'
import MediaQuery from '@style/mediaQuery';

export const LargeStyledTitle = styled.h1`
  color:${blackColor};
  font-weight:${fontWeightBolder}  ;
  font-size:3.2rem;
  ${props => props.css}
  
   ${MediaQuery.mobileDefault`
      font-size:1.6rem;
  `}
`
export const MediumStyledTitle = styled.h2`
  color:${blackColor};
  font-weight:${fontWeightBolder} ;
  font-size:2.4rem;
  ${props => props.css}
  
   ${MediaQuery.mobileDefault`
      font-size:1.6rem;
  `}
`
export const SmallStyledTitle = styled.h3`
  color:${blackColor};
  font-weight:${fontWeightBolder};
  font-size:2.4rem;
  ${props => props.css}
    
  ${MediaQuery.mobileDefault`
      font-size:1.6rem;
  `}
`
export const MediumHeading = `
  color:${blackColor};
  font-weight:${fontWeightBolder};
  font-size:2.4rem;
  ${props => props.css}
  
  ${MediaQuery.mobileDefault`
      font-size:1.6rem;
  `}
`

const StyledDetailHotelName = css`
  font-size:2.0rem;
  font-weight:${fontWeightBolder};
  line-height:2.9rem;
`

export const StyledHeadingComponent = styled.h1`
    ${props => props.css}
    ${props => props.theme.type === 'modal' && MediumHeading}
    ${props => props.theme.type === 'detailHotelTitle' && StyledDetailHotelName}
`
