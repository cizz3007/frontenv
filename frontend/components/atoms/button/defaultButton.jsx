import React from 'react';
import {DefaultButtonStyled} from './styled';
import PropTypes from 'prop-types';

export const ButtonType = {
  BUTTON: 'button',
  RESET : 'reset',
  SUBMIT: 'submit',
  CLOSE : 'close',
}

export const ButtonTheme = {
  DEFAULT: 'default',
  TTBB   : 'ttbb',
}

const Button = (props) => {
  const {
    type,
    onClick,
    theme,
    children,
    disabled,
    active,
    style,
    className,
    tabIndex
  } = props

  return (
      <DefaultButtonStyled type={type} className={className} onClick={onClick} disabled={disabled} active={active} css={style}>
        {children}
      </DefaultButtonStyled>
  )
}

Button.propTypes = {
  type     : PropTypes.string,
  theme    : PropTypes.string,
  onClick  : PropTypes.func,
  children : PropTypes.node,
  classname: PropTypes.string,
  disabled : PropTypes.bool
}

Button.defaultProps = {
  type    : ButtonType.BUTTON,
  theme   : ButtonTheme.DEFAULT,
  disabled: false,
}

export default Button
