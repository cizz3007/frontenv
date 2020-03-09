import React from 'react';
import {FieldsetStyled} from './styled'
import PropTypes from 'prop-types';

const Fieldset = (props) => {
  const {
    children,
    form,
    name,
    disabled,
    style
  } = props;

  return (
      <FieldsetStyled form={form} name={name} disabled={disabled} css={style}>
        {children}
      </FieldsetStyled>
  )
}

Fieldset.prototypes = {
  children: PropTypes.node,
  form    : PropTypes.string,
  name    : PropTypes.string,
  disabled: PropTypes.any,
}
export default Fieldset;
