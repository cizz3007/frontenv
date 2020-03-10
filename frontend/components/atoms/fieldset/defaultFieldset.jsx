import React from 'react';
import {FieldsetStyled} from './styled'
import PropTypes from 'prop-types';
/**
 * Use `Badge` to highlight key info with a predefined status.
 */
const Fieldset = (props) => {
  const {
    className,
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
/**
 * Component descriptiondd
 */
Fieldset.defaultProps = {
  name:null,
  form:null,
  disabled:false,
  children:null,
}
export default Fieldset;
