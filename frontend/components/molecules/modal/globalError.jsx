import React from 'react';
import ModalDiv, {ModalTheme, ModalType} from '@atoms/div/modal/defaultModal'
import Button, {ButtonType} from '@atoms/button/defaultButton'
import {connect} from 'react-redux';
import {debounce} from 'lodash';
import Heading , {HeadingTheme, HeadingType} from '@atoms/typography/title'
import Paragraph, {ParagraphTheme} from '@atoms/typography/paragraph/defaultParagraph'
import {ModalStyledBottom, ModalStyledButton, ModalStyledMiddle, ModalStyledTop} from '@atoms/div/modal/modalStyle'
import {INIT_MODAL, OPEN_MODAL} from '@/reducer/modal'
import {modalConfirmActionSelect, modalDescriptionSelect, modalTitleSelect} from '@/reselect/modal'
import {LANGUAGE_TEXT_RESELECTOR} from '@/reselect/language'

class GlobalErrorModal extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {}

    this.modal = React.createRef();

    this.resizeHandler = debounce(this.resizeHandler.bind(this), 300);
    this.closeModalHandler = this.closeModalHandler.bind(this);
    this.confirmHandler = this.confirmHandler.bind(this);
  }

  resizeHandler() {
    centralize(this.modal.current)
  }

  closeModalHandler() {
    this.props.closeModal();
  }

  confirmHandler(){
    this.props.confirmAction();
  }

  componentDidMount() {
    centralize(this.modal.current)
    window.addEventListener('resize', this.resizeHandler)
    lockScreen();
  }

  componentWillUnmount() {
    unlockScreen();
    window.removeEventListener('resize', this.resizeHandler)
  }

  render() {

    const {} = this.state;

    const {
      title,
      description,
      TEXT
    } = this.props;

    return (
        <ModalDiv onClick={this.closeModalHandler}
                  id={this.modal}
                  theme={ModalTheme.DEFAULT}
                  type={ModalType.DEFAULT}>
          <ModalStyledTop>
            <Heading type={HeadingType.MEDIUM}>{TEXT.title}</Heading>
          </ModalStyledTop>
          <ModalStyledMiddle>
            <Paragraph theme={ParagraphTheme.MODAL}>{TEXT.description}</Paragraph>
          </ModalStyledMiddle>
          <ModalStyledBottom>
            <ModalStyledButton type={ButtonType.BUTTON} role={'button'} onClick={this.closeModalHandler}>{TEXT.cancel}</ModalStyledButton>
            <ModalStyledButton type={ButtonType.BUTTON} role={'button'} onClick={this.confirmHandler}>{TEXT.confirm}</ModalStyledButton>
          </ModalStyledBottom>
        </ModalDiv>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    title:modalTitleSelect(state),
    description:modalDescriptionSelect(state),
    confirmAction:modalConfirmActionSelect(state),
  }
}

const mapDispatchToProps =(dispatch)=>{
  return {
    closeModal:()=> dispatch({
      type:INIT_MODAL
    })
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(GlobalErrorModal)
