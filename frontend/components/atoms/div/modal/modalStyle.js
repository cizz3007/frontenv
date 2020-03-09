import styled ,{css} from 'styled-components';
import {whiteColor} from '@global/styleVariable'
import {zIndex8} from '@global/styleVariable'

const MIXIN_MODAL_SHADOW_STYLE = css`
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
`

const MIXIN_MODAL_MAX_WIDTH = css`
    max-width: 332px;
`
//테마? 전체적인 색깔,통일적인 스타일 가이드 .
//2 스토리북,
export const ModalStyled = styled['div']`
  position: absolute;
  background-color: ${whiteColor};  
  ${MIXIN_MODAL_SHADOW_STYLE}
  z-index:${zIndex8};
  border-radius: 8px;
  box-sizing: border-box;
  width: 100%;
  ${MIXIN_MODAL_MAX_WIDTH}
  ${props=> props.css}
  .inner{
      position: relative;
      padding: 4.0rem;
  }
    
`


