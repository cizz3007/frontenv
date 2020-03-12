import React from 'react';
import {ModalStyled, ModalStyledInner} from './modalStyle';
import ReactFocusLock from 'react-focus-lock'
import ScreenBlockDiv, {ScreenBlockTheme} from '../screen/screenBlockDiv'

export const ModalType = {
  DEFAULT: 'default',
}

export const ModalTheme = {
  DEFAULT: 'default',
  TTBB   : 'ttbb',
}

const ModalDiv = (props) => {

  const {
    style,
    children,
    onClick,
    id,
    type,
    theme
  } = props;

  return (
      <ReactFocusLock>
        <ModalStyled css={style}
                     ref={id}
                     theme={theme}>
          <ModalStyledInner>
            {children}
          </ModalStyledInner>
        </ModalStyled>
        <ScreenBlockDiv onClick={onClick} theme={false}/>
      </ReactFocusLock>
  )
}

export default ModalDiv
