import React from 'react';
import PropTypes from 'prop-types';
import {MeterStyled} from '@atoms/meter/styled';

const Meter = (props) => {

  const {
    children,
    style,
    form,
    high,
    low,
    max,
    min,
    optimum,
    value,
  } = props;

  return (
      <MeterStyled css={style}
                   form={form}
                   high={high}
                   low={low}
                   max={max}
                   min={min}
                   optimum={optimum}
                   value={value}>
        {children}
      </MeterStyled>
  )
}

const propCheck = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
])

Meter.propTypes = {
  children:PropTypes.node,
  style:PropTypes.object,
  form:PropTypes.string,
  high:propCheck,
  low:propCheck,
  max:propCheck,
  min:propCheck,
  optimum:propCheck,
  value:propCheck
}

export default Meter;

