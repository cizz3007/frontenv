import styled,{css} from 'styled-components'
import {blackColor, fontWeightLight, warmGrayColor} from '@global/styleVariable'

export const StyledHashTag = styled.a`
      line-height: 1.8rem;
      font-size: 1.2rem;
      color:${blackColor};
      display: inline;
      font-weight: ${fontWeightLight};
      background-color: ${warmGrayColor};
      padding: 0 .5rem;
      border-radius: 1px;
      min-width: 40px;
     
`
