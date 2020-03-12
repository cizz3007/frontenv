import React from 'react';
import {H1Styled} from './styled'

const H1 = (props) => {

  const {
    style,
    onClick,
    children,
  } = props;

  return (
      <H1Styled css={style} onClick={onClick}>
        {children}
      </H1Styled>
  )
}

export default H1;
