import React from 'react';
import {ThemeProvider} from 'styled-components'
import PropTypes from 'prop-types'
import {StyledIcon} from '@atoms/icon/styled'

export const IconType = {
  DEFAULT: 'default',
  MAP    : 'map',
  STAR   : 'star',
  CLOSE  : 'close',
  LIKE   : 'like',
  SHARE  : 'share',
}

export const IconTheme = {
  TTBB   : 'ttbb',
  DEFAULT: 'default',
}

export const IconSize = {
  SMALL : 'small',
  MIDDLE: 'middle',
  LARGE : 'large'
}

const Icon = (props) => {

  const theme = {
    type           : props.type ?? Icon.defaultProps.type,
    theme          : props.theme ?? Icon.defaultProps.theme,
    size           : props.size ?? Icon.defaultProps.size,
    backgroundColor: props.backgroundColor ?? Icon.defaultProps.size,
    active         : props.active ?? Icon.defaultProps.active,
  }

  return (
      <ThemeProvider theme={theme}>
        <StyledIcon>
          {props.children}
        </StyledIcon>
      </ThemeProvider>
  )
}

Icon.propTypes = {
  type           : PropTypes.string.isRequired,
  theme          : PropTypes.string.isRequired,
  size           : PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  active         : PropTypes.bool,
  children       : PropTypes.node,
}

Icon.defaultProps = {
  type           : IconType.DEFAULT,
  theme          : IconTheme.DEFAULT,
  size           : IconSize.MIDDLE,
  backgroundColor: 'transparent',
  active         : false
}
export default Icon
