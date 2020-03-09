import React from 'react';
import {LabelStyled} from './styled';
import PropTypes from 'prop-types';

const Label = (props) => {

  const {
    children,
    style,
    htmlFor,
    onClick,
  } = props;
  return (
  <LabelStyled css={style} htmlFor={htmlFor} onClick={onClick}>
    {
      children
    }
  </LabelStyled>)
}

Label.prototypes = {
  children:PropTypes.node,
  style:PropTypes.object,
  htmlFor:PropTypes.string.isRequired,
  onClick:PropTypes.func,
}

export default Label;
