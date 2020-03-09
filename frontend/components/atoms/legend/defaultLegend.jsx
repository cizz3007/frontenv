import React from 'react';
import {LegendStyled} from './styled';
import {LabelStyled} from '../label/styled'

const Legend = (props) => {

  const {
    children,
    onClick,
    style,
  } = props;

  return (
      <LegendStyled onClick={onClick} css={style}>
       {
          children
        }
      </LegendStyled>
  )
}

export default Legend;
