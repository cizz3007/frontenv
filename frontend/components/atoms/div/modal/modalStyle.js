import styled, {css} from 'styled-components'
import MediaQuery from '@style/mediaQuery'
import {borderThinColor, palePurpleColor, warmPinkColor, whiteColor} from '@global/styleVariable'
import {zIndex8} from '@global/styleVariable'
import Button from '@atoms/button/defaultButton'
const MIXIN_MODAL_SHADOW_STYLE = css`
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
`

const MIXIN_MODAL_MAX_WIDTH = css`
    max-width: 332px;
`

const MIXIN_TRANSITION_MODAL = css`
`

const MIXIN_EASING_ANMATION = (easingSpeed) => css`
 transition: all ${easingSpeed}s cubic-bezier(0.39, 0.575, 0.565, 1);
`

export const ModalStyledTop = styled.div`
  position: relative;
  padding: 2.2rem 4.0rem;
  border-bottom: 2px solid ${borderThinColor};
  ${MIXIN_EASING_ANMATION(0.24)}
  ${MediaQuery.mobileDefault`
      padding:1.6rem 3.6rem;
  `}
`
// Adapting based on props
const PropsBox = styled.div(props => ({
  background: props.background,
  height: '50px',
  width: '50px'
}));

export const ModalStyledMiddle = styled.div`
  position: relative;
  padding:1.4rem 4.0rem;
  ${MIXIN_EASING_ANMATION(0.24)}
  ${MediaQuery.mobileDefault`
      padding:1.25rem 3.4rem;
  `}
`
export const ModalStyledBottom = styled.div`
  position: relative;
  border-top: 2px solid ${borderThinColor};
  padding: 0 4.2rem;
  height: 4.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${MIXIN_EASING_ANMATION(0.24)}
  ${MediaQuery.mobileDefault`
      padding:0 3.6rem;
      height:4.0rem;
  `}
`
export const ModalStyledInner = styled.div`
  position: relative;
  text-align: center;
`

export const ModalStyledButton = styled(Button)`
     border: none;
     background-image: linear-gradient(to right, ${warmPinkColor} 0%, ${palePurpleColor} 100%);
     border-radius: 16px;
     font-size: 1.4rem;
     color:${whiteColor}
      ${props => props.disabled && css`
        opacity: .6;
        cursor: not-allowed;
      `}
`

export const ModalStyled = styled['div']`
  position: fixed;
  background-color: ${whiteColor};  
  z-index:${zIndex8};
  border-radius: 8px;
  box-sizing: border-box;
  width: 100%;
  ${MIXIN_MODAL_SHADOW_STYLE}
  ${MIXIN_MODAL_MAX_WIDTH}
  ${props => props.css}
  
  //default
  ${props => props.theme === 'default' && css` 
      ${ModalStyledInner}{
            z-index: 99;
            
      }
     ${MIXIN_EASING_ANMATION(0.2)}
  `} 
  
  //ttbb
  ${props => props.theme === 'ttbb' && css`
   ${ModalStyledInner}{
      background-color:#ffbc00;
      }
     ${MIXIN_EASING_ANMATION(0.2)}
  `}
`

