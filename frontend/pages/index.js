import React from 'react';
import ResetStyle from "@global/resetStyle";
import ModalDiv from '../components/atoms/div/modal/defaultModal'

class IndexPage extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      active: false,
      value : '',
    }

    this.onClickHandler = this.onClickHandler.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onClickHandler() {
    this.setState({
      active: !this.state.active,
    })
  }

  onChange(e) {
    this.setState({
      value:e.target.value,
    })
  }

  render() {
    return (
        <>
          <ResetStyle/>
          <ModalDiv>
          </ModalDiv>
        </>
    )
  }
}

export default IndexPage
