import styled from 'styled-components';
import {whiteColor} from '@global/styleVariable'
import {zIndex8} from '../../../../global/styleVariable'

export const ModalStyled = styled['div']`
  position: absolute;
  background-color: ${whiteColor};  
  z-index:${zIndex8};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  box-sizing: border-box;
  width: 100%;
  max-width: 332px;
  
  .inner{
      position: relative;
      padding: 4.0rem;
  }
    
`


