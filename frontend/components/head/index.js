import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {connect} from 'react-redux';

const Head = (props) => {

  const {
    title,
    description,
    themeColor,
    keyword,
    language
  } = props;

  return (
      <HelmetProvider>
        <Helmet key={window.location.href} deferr={true}>
          <html lang={language}/>
          <body/>
          <title>{title || 'loading..'}</title>
          <meta charSet="utf-8"/>
          <meta name="title" content={title || Head.defaultState.title}/>
          <meta name="description" content={description || Head.defaultState.description}/>
          <meta name="keywords" content={keyword || Head.defaultState.keyword}/>
          <meta name="google" content="notranslate"/>
          <meta name="author" content="TripBtoz"/>
          <meta name="theme-color" content={themeColor || Head.defaultState.themeColor}/>

          <meta name="twitter:title" content={title || Head.defaultState.title}/>
          <meta name="twitter:description" content={description || Head.defaultState.description}/>
          <meta name="twitter:site" content={'@UTworg1A6lF2oot'}/>
          <meta name="twitter:creator" content={'@UTworg1A6lF2oot'}/>
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:image" content="/favicon/icon-144.png"/>
          {/*<meta name="twitter:player" content="https://player.vimeo.com/video/292078292"/>*/}
          {/*<meta name="twitter:player:width" content="1280"/>*/}
          {/*<meta name="twitter:player:height" content="720"/>*/}

          <meta property="og:title" content={title || Head.defaultState.title}/>
          <meta property="og:description" content={description || Head.defaultState.description}/>
          <meta property="og:type" content={'website'}/>
          <meta property="og:site_name" content="tripBtoz"/>
          <meta property="og:url" content={"https://www.tripbtoz.com"}/>
          <meta property="og:image" content={'/favicon/icon-144.png'}/>
          <meta property="og:image:secure_url" content="https://littleone.kr"/>
          <meta property="og:image:type" content="image/png"/>
          <meta property="og:image:width" content="1280"/>
          <meta property="og:image:height" content="720"/>
          {/*<meta property="og:video:url" content="https://player.vimeo.com/video/292078292"/>*/}
          {/*<meta property="og:video:secure_url" content="https://player.vimeo.com/video/292078292"/>*/}
          {/*<meta property="og:video:type" content="application/x-shockwave-flash"/>*/}
          {/*<meta property="og:video:width" content="1280"/>*/}
          {/*<meta property="og:video:height" content="720"/>*/}

          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <meta name="format-detection" content="telephone=no, address=no, email=no"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="msapplication-TileImage" content="/favicon/icon-144.png"/>
          <meta name="google-signin-client_id" content={''}/>
          <link rel="apple-touch-icon" sizes="57x57" href="/favicon/icon-57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/favicon/icon-60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/favicon/icon-72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon/icon-76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/favicon/icon-114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/favicon/icon-120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/favicon/icon-144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/favicon/icon-152.png"/>
          <link rel="apple-touch-icon" sizes="167x167" href="/favicon/icon-167.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/icon-180.png"/>
          <link rel="icon" type="image/png" href="/favicon/icon-16.png" sizes="16x16"/>
          <link rel="icon" type="image/png" href="/favicon/icon-32.png" sizes="32x32"/>
          <link rel="icon" type="image/png" href="/favicon/icon-96.png" sizes="96x96"/>
          <link rel="icon" type="image/png" href="/favicon/icon-144.png" sizes="144x144"/>
          <link rel="icon" type="image/png" href="/favicon/icon-192.png" sizes="192x192"/>
          <link rel="icon" type="image/png" href="/favicon/icon-196.png" sizes="196x196"/>
          <link rel="shortcut icon" href="/favicon/favicon.ico"/>
          <link rel="mask-icon" color="#fff" href="/favicon/safari-pinned-tag-icon.svg"/>
          <link rel="manifest" href="/favicon/manifest.json"/>
        </Helmet>
      </HelmetProvider>
  )
}

Head.defaultState = {
  title      : '트립비토즈',
  description: '1,940만 명 국민카드 고객 전용 자유여행 플랫폼 - 티티비비 TTBB',
  keyword    : ['호텔 예약, 항공권, 액티비티 예약, 여행 일정 추천, 카드사 할인, 최저가 예약, 티티비비 (TTBB)'],
  themeColor : '#be1d4a'
};

const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps)(Head);
