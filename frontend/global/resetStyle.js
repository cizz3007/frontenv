import {createGlobalStyle} from "styled-components";

const ResetStyle = createGlobalStyle`
    @font-face {
      font-family: 'Noto Sans Korean';
      src: local('Noto Sans Light'), local('NotoSans-Light'),
      url(/fonts/NotoSansKR-Light.woff) format('woff');
      font-weight: 300;
    }
    
    .lang-ko {
      font-family: "Noto Sans Korean", system, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "애플 SD 산돌고딕 Neo", Sans-serif, serif;
      -ms-word-break: keep-all;
      word-break: keep-all;
    }
    
    a {
      color: #333;
      -webkit-tap-highlight-color: transparent;
    }
    
    body::-webkit-scrollbar {
      display: none;
    }
    
    html, body {
      font-family: "Noto Sans Korean", system, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "애플 SD 산돌고딕 Neo", Sans-serif, serif;
      font-size: 10.0px; //단위를 rem을 쓸 것이다. 최상단에 10.0으로 한다. 계산 편하게..
      width: 100%;
      background-color: #fff;
      height: 100%;
      /*드래그 방지 (+IE9)*/
      //user-drag: none;
      //user-select: none;
      //-moz-user-select: none;
      //-webkit-user-drag: none;
      //-webkit-user-select: none;
      //-ms-user-select: none;
      -ms-overflow-style: none;
      //overflow: auto;
    
      //맥북에서 스크롤링 되게
      -webkit-overflow-scrolling: touch;
    }
    
    ::-moz-selection {
      background: #ffcea6
    }
    
    ::selection {
      background: #ffcea6
    }
    
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      vertical-align: middle;
      text-decoration: none;
      font-style: normal;
      font-weight: normal;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-smooth: always;
    
    }
    
    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, main {
      display: block
    }
    
    body {
      line-height: 1
    }
    
    ol, ul {
      list-style: none
    }
    
    ol::after, ul::after {
      clear: both;
      content: "";
      display: block
    }
    
    blockquote, q {
      quotes: none
    }
    
    blockquote:before, blockquote:after, q:before, q:after {
      content: '';
      content: none
    }
    
    table {
      border-collapse: collapse;
      border-spacing: 0
    }
    
    .clearfix {
      content: "";
      display: block;
      clear: both
    }
    
    img {
      border: none
    }
    
    caption, legend {
      visibility: hidden;
      position: absolute;
      left: -9999em;
      width: 1px;
      height: 1px;
      margin: 0;
      padding: 0;
      background: none;
      font-size: 0;
      line-height: 0;
      text-indent: -9999em
    }
    
    select::-ms-expand {
      display: none
    }
    
    select {
      //padding-right: 20px !important;
      padding: 0;
      margin: 0;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
    
    input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px #fff inset !important
    }
    
    input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s
    }
    
    input:disabled {
      background-color: #fff;
      opacity: .5
    }
    
    input:focus {
      outline: none;
    }
    
    // 인풋  number spinbox 지우기
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    
    input[type="number"] {
      -moz-appearance: textfield;
    }
    
    br {
      color: transparent;
      visibility: hidden;
    }
    
    button {
      padding: 0;
      -moz-appearance: none;
      -webkit-appearance: none;
      border: 0;
      outline: 0;
      display: inline-block;
      cursor: pointer;
      background-color: transparent;
    }
    
    input{
      padding: 0;
    }
    .application {
      max-width: 100%;
      width: 100%;
      overflow: hidden;
    }
`

export default ResetStyle
