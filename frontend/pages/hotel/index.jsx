import React from 'react';
import {connect} from 'react-redux';
import {OPEN_MODAL} from '@/reducer/modal'
import Layout from '@pages/layout'
class HotelPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.action = this.action.bind(this)
  }

  action() {
    const payload = {
      open       : true,
      title      : '호텔 페이지',
      description: '호텔 페이지에서 날리는 모달창',
      onConfirm  : () => {
        alert('404에러')
      }
    }
    this.props.modalOpen(payload)
  }

  render() {
    return (
        <section>
          호텔 페이지
          <button onClick={this.action}>페이송로드 전송2</button>
        </section>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    modalOpen: (payload) => dispatch({
      type   : OPEN_MODAL,
      payload: payload
    }),
  }
};
export default connect(null, mapDispatchToProps)(HotelPage);
