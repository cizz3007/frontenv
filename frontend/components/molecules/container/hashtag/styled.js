import styled, {css} from 'styled-components'
import {StyledHashTag} from '@atoms/tag/styled'

export const StyledHashTagContainer = styled.div`
    margin-top: 2.4rem;
  
  & > ${StyledHashTag} {
      margin-right: 1.1rem;
  
  &:last-child{
    margin-right: 0;
   
  }
  }
`
