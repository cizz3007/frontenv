import styled from 'styled-components'
import {blackColor, fontWeightNormal, whiteColor} from '@global/styleVariable'

export const StyledStarGrade = styled.em`
   display: inline-block;
   border: 1px solid ${blackColor};
   border-radius: 2px;
   font-size: 1.2rem;
   line-height: 1.8rem;
   padding: 0 .45rem;
   font-weight: ${fontWeightNormal};
   background-color: ${whiteColor};
`
