import styled,{css} from 'styled-components';
import {blackColor, whiteColor} from '../../../global/styleVariable'
import CloseIcon from '@images/button/icon-close-black-big@2x.png'

const SmallCloseButton = css`
  background: url(${CloseIcon}) no-repeat center/contain;
  width: 3.8888vw;
  height: 3.8888vw;
`

export const DefaultButtonStyled = styled.button`
  background-color: ${props => props.active ? blackColor : whiteColor};
  color:${props => props.active ? whiteColor : blackColor};
  //font-size:1em;
  //padding: .4rem 1rem;
  //min-width: 7.0rem;
  //line-height: 1.8rem;
  //border: 1px solid #333;
  //border-radius: .4rem;
  //font-size: 1.6rem;
  ${props=> props.css}
  ${props=> props.theme === ''}
`
