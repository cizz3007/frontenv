import React from 'react';
import PropTypes from 'prop-types';
import {DefaultStyledSpan} from './styled';

export const SpanTheme = {
  DEFAULT: 'default',
  TTBB   : 'ttbb',
}

const Span = (props) => {

  const {
    children,
    style,
    theme,
    className,
    onClick,
    onMouseEnter,
    onMouseLeave,
  } = props;

  return (
      <DefaultStyledSpan css={style}
                         theme={theme}
                         className={className}
                         onClick={onClick}
                         onMouseLeave={onMouseLeave}
                         onMouseEnter={onMouseEnter}>
        {children}
      </DefaultStyledSpan>
  )
}

Span.defaultProps = {
  theme: SpanTheme.DEFAULT,
  style: null
}

Span.propTypes = {
  children: PropTypes.node,
  theme   : PropTypes.string,
  style   : PropTypes.object,
}

export default Span

