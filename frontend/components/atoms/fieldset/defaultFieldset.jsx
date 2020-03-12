import React from 'react';
import {FieldsetStyled} from './styled'
import PropTypes from 'prop-types';

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

Fieldset.defaultProps = {
  name:null,
  form:null,
  disabled:false,
  children:null,
}

Fieldset.propTypes = {
  /**
   * 노드
   */
  children: PropTypes.node,
  /**
   * fieldset 요소와 연결할 form의 id.
   */
  form    : PropTypes.string,
  /**
   *  그룹과 연관지을 이름.
   */
  name    : PropTypes.string,
  /**
   * fieldset 비활성화 여부
   */
  disabled: PropTypes.any,
}


export default Fieldset;
