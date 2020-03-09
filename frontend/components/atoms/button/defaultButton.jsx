import React from 'react';
import {DefaultButtonStyled} from './styled';
import PropTypes from 'prop-types';

export const ButtonType = {
  BUTTON: 'button',
  RESET : 'reset',
  SUBMIT: 'submit',
}

export const ButtonTheme = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
}

export const ButtonSize = {
  SMALL : 'small',
  MEDIUM: 'medium',
  LARGE : 'large',
}

const Button = (props) => {
  const {
    type,
    onClick,
    theme,
    size,
    children,
    classname,
    disabled,
    active,
    style,
  } = props

  return (
      <DefaultButtonStyled type={type} onClick={onClick} disabled={disabled} active={active} css={style}>
        {children}
      </DefaultButtonStyled>
  )
}

Button.propTypes = {
  type     : PropTypes.string.isRequired,
  theme    : PropTypes.string.isRequired,
  size     : PropTypes.string.isRequired,
  onClick  : PropTypes.func,
  children : PropTypes.node.isRequired,
  classname: PropTypes.string,
  disabled : PropTypes.bool
}

export default Button
