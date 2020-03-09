import React from 'react';
import SignUpForm from '../../components/molecules/form/signup'

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SignUpForm/>
    )
  }
}

export default Main;
