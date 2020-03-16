import React from 'react';
import {StyledStarGrade} from '@atoms/typography/star/styled'
import PropTypes from 'prop-types';
import ThemeProvider from 'styled-theme'
const StarGrade = (props) => {
  const {
    children,
    style,
    theme,
    size,
  } = props;

  return (
      <StyledStarGrade css={style} theme={theme} size={size}>
        {children}
      </StyledStarGrade>
  )
}

StarGrade.propsTypes = {
    style:PropTypes.object,
    theme:PropTypes.string,

}


export default StarGrade
