import React from 'react'
import {FormStyled} from './styled'

export const FORM_METHOD = {
  POST: 'post',
  GET : 'get'
}

export const FORM_ENCODING_TYPE = {
  DEFAULT   : 'application/www-form-urlencoded',
  MULTIPART : 'multipart/form-data',
  TEXT_PLAIN: 'text/plain',
  JSON      : 'application/json'
}

const Form = (props) => {
  const {
    children,
    method,
    encType,
    onSubmit,
    action,
    id,
    style,
  } = props;

  return (
      <FormStyled method={method}
                  id={id}
                  css={style}
                  encType={encType || FORM_ENCODING_TYPE.DEFAULT}
                  action={action}
                  onSubmit={onSubmit}>
        {children}
      </FormStyled>
  )
}

export default Form;
