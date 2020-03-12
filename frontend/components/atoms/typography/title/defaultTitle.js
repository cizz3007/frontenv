import React from 'react';
import {LargeStyledTitle, MediumStyledTitle, SmallStyledTitle} from './styled';
import PropTypes from 'prop-types';

export const TitleTheme = {
  DEFAULT: 'default',
  MODAL  : 'modal',
  TTBB   : 'ttbb',
}

const Title = (props) => {
  const {
    children,
    style,
    onClick,
    theme,
    onMouseOver,
    onMouseOut
  } = props;

  if (theme === TitleTheme.DEFAULT) {
    return (
        <MediumStyledTitle css={style} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          {children}
        </MediumStyledTitle>
    )
  } else if (theme === TitleTheme.MODAL) {
    return (
        <SmallStyledTitle css={style} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          {children}
        </SmallStyledTitle>
    )
  } else if (theme === TitleTheme.TTBB) {
    return (
        <LargeStyledTitle css={style} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          {children}
        </LargeStyledTitle>
    )
  } else {
    return (
        <MediumStyledTitle css={style} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          {children}
        </MediumStyledTitle>
    )
  }
}

Title.defaultProps = {}

Title.propTypes = {
  style   : PropTypes.object,
  theme   : PropTypes.instanceOf(TitleTheme).isRequired,
  onClick : PropTypes.func,
  children: PropTypes.node,
}
export default Title
