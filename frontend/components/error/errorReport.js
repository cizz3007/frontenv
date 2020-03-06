import React from 'react';

class ErrorBoundary extends React.PureComponent {
  state = {
    hasError: false,
    error: null,
    info: null,
  };

  componentDidCatch(error, info) {
    console.error(error);
    console.warn('## 에러_ :', info);
    this.setState({hasError: true, error: error, info: info});
    // API로 에러 보고
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <>
        <div className={styles['__error-boundary-component']}>
          <h1>ERROR BOUNDARY CATCH..</h1>;
          <pre>{JSON.stringify(this.state.info)}</pre>
          <p>죄송합니다. 에러가 발생했습니다. 이 에러는 자동으로 보고되며 조치를 취하겠습니다</p>
          <button role={'button'} type={'button'} onClick={(e) => {
            this.setState({
              hasError: false,
              error:null,
              info:null,
            });
            window.location.replace('/');
          }}>메인 페이지로</button>
        </div>
        {
          this.props.children
        }
      </>
    }
    return this.props.children;
  }
}

export default ErrorBoundary
