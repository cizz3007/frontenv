import React from 'react';
import {StyledHashTag} from '@atoms/tag/styled'
import PropsTypes from 'prop-types';

const HashTag = (props) => {

  const {
    text,
    children,
  } = props;

  return (
      <StyledHashTag>
        #{text}
      </StyledHashTag>
  )
}

HashTag.propTypes = {
  text:PropsTypes.string.isRequired,
}

export default HashTag;
