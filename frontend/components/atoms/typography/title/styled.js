import styled from 'styled-components'
import {blackColor, fontWeightBolder, fontWeightNormal} from '@global/styleVariable'
import MediaQuery from '@style/mediaQuery';

export const LargeStyledTitle = styled.h2`
  color:${blackColor};
  font-weight:${fontWeightBolder}  ;
  font-size:3.2rem;
  ${props=> props.css}
`
export const MediumStyledTitle = styled.h2`
  color:${blackColor};
  font-weight:${fontWeightBolder} ;
  font-size:2.4rem;
  ${props=> props.css}
`
export const SmallStyledTitle = styled.h2`
  color:${blackColor};
  font-weight:${fontWeightBolder};
  font-size:2.4rem;
  ${props=> props.css}
    
  ${MediaQuery.mobileDefault`
      font-size:1.6rem;
  `}
`
export const SmallestStyledTitle = styled.h2`
  color:${blackColor};
  font-weight:${fontWeightBolder};
  font-size:2.4rem;
  ${props=> props.css}

`
