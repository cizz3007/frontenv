import React from 'react';

class ErrorBoundary extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {hasError: false, error: null, errorInfo: null};
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
    this.setState({
      hasError : true,
      error    : error,
      errorInfo: errorInfo
    })

    alert('error 서버로 보고')
  }

  render() {

    const {
      hasError,
      errorInfo,
    } = this.state;

    const {
      children
    } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return <>
        <div>{JSON.stringify(errorInfo)}</div>
        <button type={'button'} onClick={()=>{
          window.location.reload();
        }}>리로드</button>
      </>
    }

    return children;
  }
}

export default ErrorBoundary
