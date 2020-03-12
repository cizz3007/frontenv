import React from 'react';
import PropTypes from 'prop-types';

import SignUpForm from '@molecules/form/signup'
import Fieldset from '@atoms/fieldset/defaultFieldset'
import Input from '@atoms/input/defaultInput'

export default {
  title        : 'Form',
  component    : SignUpForm,
  subcomponents: {Fieldset, Input},
  parameters   : {
    componentSubtitle: '스타일드 컴포넌트 테스트',
    viewMode: 'docs'
  },
};


export const signupform = ({status, children}) => {

  return (
      <SignUpForm/>
  )
}

signupform.propTypes = {
  status: PropTypes.oneOf(['positive', 'negative', 'neutral', 'error', 'warning']),
};
signupform.defaultProps = {
  status: 'neutral',
};
