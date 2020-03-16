import React from 'react';
import {connect} from 'react-redux';
import {OPEN_MODAL} from '@/reducer/modal'
import Layout from '@pages/render'
import {Link, NavLink} from 'react-router-dom'
import Button from '@atoms/button/defaultButton'
import {SET_USER_LANGUAGE} from '@/reducer/user'
import {LANGUAGE_TEXT_RESELECTOR} from '@/reselect/language'
import Title from '@atoms/typography/title'
import Span, {SpanTheme} from '@atoms/span/defaultSpan'

class Main extends React.PureComponent {

  constructor(props) {
    super(props);

    this.action = this.action.bind(this)
    this.changeLang = this.changeLang.bind(this)
  }

  action() {
    const payload = {
      open       : true,
      title      : '테스트',
      description: '내가 뭘 하든간에',
      onConfirm  : () => {
        alert('whatever')
      }
    }
    this.props.modalOpen(payload)
  }

  changeLang(value) {
    this.props.changeLanguage(value);
  }

  render() {
    const{
      TEXT
    } = this.props;


    return (
        <section>
          <h1> 인덱스 페이지</h1>
          <ul>
            <li>
              <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li> <li>
            <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
          </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li> <li>
            <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
          </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li> <li>
            <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
          </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li> <li>
            <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
          </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li> <li>
            <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
          </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li> <li>
            <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
          </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li> <li>
            <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
          </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li> <li>
            <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
          </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li> <li>
            <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
          </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li> <li>
            <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
          </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li> <li>
            <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
          </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li> <li>
            <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
          </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li> <li>
            <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
          </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li> <li>
            <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
          </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li> <li>
            <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
          </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li> <li>
            <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
          </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li> <li>
            <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
          </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li> <li>
            <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
          </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li> <li>
            <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
          </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li> <li>
            <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
          </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li> <li>
            <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
          </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li> <li>
            <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
          </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li>
            <li>
              <NavLink to={'/hotel'}>호텔 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/user'}>유저 페이지 이동</NavLink>
            </li>
            <li>
              <NavLink to={'/detail'}>디테일 페이지 이동</NavLink>
            </li>
            <li>
              <Button onClick={this.action}>페이로드 전송</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ko')
              }}>한국어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('en')
              }}>영어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('ja')
              }}>일본어 변경</Button>
            </li>
            <li>
              <Button onClick={() => {
                this.changeLang('zh')
              }}>중국어 변경</Button>
            </li>
          </ul>
          <Title>{TEXT.test}</Title>
          <Span theme={SpanTheme.TTBB}>테스트</Span>
          <Span theme={SpanTheme.DEFAULT}>테스트2</Span>
        </section>
    )
  }
}
const mapStateToProps = (state)=>{
  return {
    TEXT:LANGUAGE_TEXT_RESELECTOR(state),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    modalOpen     : (payload) => dispatch({
      type   : OPEN_MODAL,
      payload: payload
    }),
    changeLanguage: (value) => dispatch({
      type    : SET_USER_LANGUAGE,
      language: value
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
