import React from 'react';
import {DefaultModalParagraphStyle} from './styled'
import PropTypes from 'prop-types';

export const ParagraphTheme = {
  DEFAULT: 'default',
  TTBB   : 'ttbb',
}

export const ParagraphType = {
  DEFAULT:'p',
  EM:'em',
  STRONG:'strong',
  SPAN:'span',
  BOLD:'b',
  ITALIC:"italic"
}

const Paragraph = (props) => {

  const {
    children,
    style,
    onMouseEnter,
    onMouseLeave,
    theme,
  } = props;

  if (theme === ParagraphTheme.DEFAULT) {
    return (
        <DefaultModalParagraphStyle
            css={style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
          {children}
        </DefaultModalParagraphStyle>
    )
  } else if (theme === ParagraphTheme.TTBB) {
    return (
        <DefaultModalParagraphStyle
            css={style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
          {children}
        </DefaultModalParagraphStyle>
    )
  } else if (theme === ParagraphTheme.MODAL) {
    return (
        <DefaultModalParagraphStyle
            css={style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
          {children}
        </DefaultModalParagraphStyle>
    )
  } else {
    return (
        <DefaultModalParagraphStyle
            css={style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
          {children}
        </DefaultModalParagraphStyle>
    )
  }
}

Paragraph.propTypes = {
  theme:PropTypes.string,
  style:PropTypes.object,
  children:PropTypes.node,
  onMouseEnter:PropTypes.func,
  onMouseLeave:PropTypes.func,
}

export default Paragraph;

