import React from 'react';
import DefaultInputStyle from '@components/atoms/input/inputStyle'
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
    autocapitalize,
    name,
    id,
    value,
    onChange
  } = props

  return (
      <DefaultInputStyle type={type}
                         name={name}
                         onChange={onChange}
                         id={id}
                         length={value.length}
                         disabled={disabled}
                         value={value}
                         autoCorrect={autoCorrect}
                         autoCapitalize={autocapitalize}
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

export default Input;
