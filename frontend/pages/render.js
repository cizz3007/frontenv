import React from 'react';
import {connect} from 'react-redux';
import {modalOpenSelect} from '@/reselect/modal'
import GlobalErrorModal from '@molecules/modal/globalError'
import configureStore from '../store/store'
import {LANGUAGE_TEXT_RESELECTOR} from '@/reselect/language'

class PageRenderer extends React.PureComponent {

  componentDidMount() {
    if (process.env.NODE_ENV === 'development') {
      const store = configureStore().store;
      store.subscribe(function (e) {
        console.log('# trace :', store.getState());
      });
    }
  }

  render() {
    const {
      children,
      isActiveModal,
      TEXT
    } = this.props;

    return (
        <>
          {
            isActiveModal && <GlobalErrorModal TEXT={TEXT}/>
          }
          {
            children
          }
        </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isActiveModal: modalOpenSelect(state),
    TEXT:LANGUAGE_TEXT_RESELECTOR(state)
  }
}
export default connect(mapStateToProps)(PageRenderer)
