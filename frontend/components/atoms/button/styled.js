import styled from 'styled-components';
import {blackColor, whiteColor} from '../../../global/styleVariable'

export const DefaultButtonStyled = styled.button
    `
  background-color: ${props => props.active ? blackColor : whiteColor};
  color:${props => props.active ? whiteColor : blackColor};
  font-size:1em;
  padding: .4rem 1rem;
  min-width: 7.0rem;
  line-height: 1.8rem;
  border: 1px solid #333;
  border-radius: .4rem;
  font-size: 1.6rem;
  ${props=> props.css}
  `
