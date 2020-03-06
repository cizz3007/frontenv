import styled from 'styled-components'
import {blackColor, zIndex7} from '../../../../global/styleVariable'
import {Validator} from '../../../../functions/validator'

export const ScreenBlockStyled = styled.div`
       position: fixed;
       z-index: ${zIndex7};
       width: 100%;    
       height:100%;
       min-height:100vh;
       background-color: ${props => !Validator.isEmpty(props.theme) ? props.theme : blackColor};
       opacity: .6;
`
