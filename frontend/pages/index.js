import React from 'react';
import ResetStyle from "@global/resetStyle";
import Button, {ButtonSize, ButtonTheme, ButtonType} from '@components/atoms/button/defaultButton.jsx'
import Input, {InputType} from '@components/atoms/input/defaultInput'
import Image from '../components/atoms/img/image'

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
          <div>styled component</div>
          <Input type={InputType.TEXT}
                 name={'checkbox'}
                 value={this.state.value}
                 id={'id'}
                 onChange={this.onChange}
                 autoCorrect={'off'}
                 autoComplete={'off'}/>
          <Button type={ButtonType.BUTTON}
                  onClick={this.onClickHandler}
                  theme={ButtonTheme.DEFAULT}
                  active={this.state.active}
                  size={ButtonSize.SMALL}>
            원자
          </Button>
          <Image/>
        </>
    )
  }
}

export default IndexPage
