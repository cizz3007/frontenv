import React from 'react';
import {LargeStyledTitle, MediumStyledTitle, SmallStyledTitle, StyledHeadingComponent} from './styled';
import PropTypes from 'prop-types';
import {ThemeProvider} from 'styled-components'

export const HeadingTheme = {
  DEFAULT: 'default',
  TTBB   : 'ttbb',
}

export const HeadingType = {
  SMALL : 'small',
  MEDIUM: 'medium',
  LARGE : 'large',
  MODAL : 'modal',
}

const Heading = (props) => {
  const {
    children,
    style,
    onClick,
    theme,
    type,
    onMouseEnter,
    onMouseLeave
  } = props;

  const Theme = {
    theme: theme,
    css:style,
    type:type,
  }

  return (
      <ThemeProvider theme={Theme}>
        <StyledHeadingComponent onClick={onClick}
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}>
          {children}
        </StyledHeadingComponent>
      </ThemeProvider>
  )
}

Heading.defaultProps = {
  theme:HeadingTheme.DEFAULT
}

Heading.propTypes = {
  style   : PropTypes.object,
  theme   : PropTypes.string,
  type    : PropTypes.string,
  onClick : PropTypes.func,
  children: PropTypes.node,
}
export default Heading
