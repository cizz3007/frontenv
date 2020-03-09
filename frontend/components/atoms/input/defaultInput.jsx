import React from 'react';
import DefaultInputStyle from '@components/atoms/input/styled'
import PropsTypes from 'prop-types';

export const InputType = {
  PASSWORD       : 'password',
  TEXT           : 'text',
  TEL            : 'tel',
  EMAIL          : 'email',
  FILE           : 'file',
  HIDDEN         : 'hidden',
  IMAGE          : 'image',
  MONTH          : 'month',
  WEEK           : 'week',
  URL            : 'url',
  RADIO          : 'radio',
  CHECKBOX       : 'checkbox',
  SEARCH         : 'search',
  SUBMIT         : 'submit',
  RESET          : 'reset',
  RANGE          : 'range',
  TIME           : 'time',
  NUMBER         : 'number',
  COLOR          : 'color',
  DATE           : 'date',
  DATE_TIME_LOCAL: 'datetime-local',
}

const Input = (props) => {
  const {
    children,
    type,
    disabled,
    autoCorrect,
    autoComplete,
    autoCapitalize,
    name,
    id,
    value,
    onChange,
    onFocus,
    onBlur,
    onClick,
    min,
    max,
    style
  } = props

  return (
      <DefaultInputStyle type={type}
                         name={name}
                         onChange={onChange}
                         onFocus={onFocus}
                         onBlur={onBlur}
                         onClick={onClick}
                         css={style}
                         id={id}
                         length={value?.length}
                         disabled={disabled}
                         value={value}
                         min={min}
                         max={max}
                         autoCorrect={autoCorrect}
                         autoCapitalize={autoCapitalize}
                         autoComplete={autoComplete}>
        {children}
      </DefaultInputStyle>
  )
}

Input.defaultProps = {
  autoCorrect:'off',
  autoCapitalize:'off',
  autoComplete:'off',
}

Input.propTypes = {
  name:PropsTypes.string.isRequired,
  id:PropsTypes.string,
  onBlur:PropsTypes.func,
  onFocus:PropsTypes.func,
  onClick:PropsTypes.func,
  onChange:PropsTypes.func,
}

export default Input;
