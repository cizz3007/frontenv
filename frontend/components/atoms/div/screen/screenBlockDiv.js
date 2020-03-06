import React from 'react';
import {ScreenBlockStyled} from './style'
import PropTypes from 'prop-types';

export const ScreenBlockTheme = {
  BLACK:'black',
  WHITE:'white',
  TRANSPARENT:'transparent'
}

const ScreenBlockDiv = (props) => {

  const {
    children,
    onClick,
    theme
  } = props;

  return (
      <ScreenBlockStyled onClick={onClick} theme={theme}>
        {children}
      </ScreenBlockStyled>
  )
}

ScreenBlockDiv.propTypes = {
  children:PropTypes.node,
  onClick:PropTypes.func.isRequired,
  theme:PropTypes.string.isRequired
}

export default ScreenBlockDiv;
