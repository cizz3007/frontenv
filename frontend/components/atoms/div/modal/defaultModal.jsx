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
  } = props;

  return (
      <ReactFocusLock>
        <ModalStyled style={style}>
          <div className={'inner'}>
          sdfdsfsd
          </div>
          {children}
        </ModalStyled>
        <ScreenBlockDiv onClick={()=>{alert('!')}} theme={false}/>
      </ReactFocusLock>
  )
}

export default ModalDiv
