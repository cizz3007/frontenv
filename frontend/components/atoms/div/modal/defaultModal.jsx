import React from 'react';
import {ModalStyled} from './modalStyle';
import ReactFocusLock from 'react-focus-lock'
import ScreenBlockDiv, {ScreenBlockTheme} from '../screen/screenBlockDiv'

export const ModalType = {
  CENTER: 'center',
  BOTTOM: 'bottom',
  TOP   : 'top',
  LEFT  : 'left',
  RIGHT : 'right',
}

const ModalDiv = (props) => {

  const {
    style,
    children,
    onclick,
  } = props;

  return (
      <ReactFocusLock>
        <ModalStyled css={style}>
          <div className={'inner'}>
            {children}
          </div>
        </ModalStyled>
        <ScreenBlockDiv onClick={onclick} theme={false}/>
      </ReactFocusLock>
  )
}

export default ModalDiv
