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
          <meta name="title" content={title || Head.defaultProps.title}/>
          <meta name="description" content={description || Head.defaultProps.description}/>
          <meta name="keywords" content={keyword || Head.defaultProps.keyword}/>
          <meta name="google" content="notranslate"/>
          <meta name="author" content="TripBtoz"/>
          <meta name="theme-color" content={themeColor || Head.defaultProps.themeColor}/>

          <meta name="twitter:title" content={title || Head.defaultProps.title}/>
          <meta name="twitter:description" content={description || Head.defaultProps.description}/>
          <meta name="twitter:site" content={'@UTworg1A6lF2oot'}/>
          <meta name="twitter:creator" content={'@UTworg1A6lF2oot'}/>
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:image" content="/favicon/android-icon-144x144.png"/>
          {/*<meta name="twitter:player" content="https://player.vimeo.com/video/292078292"/>*/}
          {/*<meta name="twitter:player:width" content="1280"/>*/}
          {/*<meta name="twitter:player:height" content="720"/>*/}

          <link rel="apple-touch-icon" href="/favicon/apple-icon-57x57.png" sizes="57x57"/>
          <link rel="apple-touch-icon" href="/favicon/apple-icon-60x60.png" sizes="60x60"/>
          <link rel="apple-touch-icon" href="/favicon/apple-icon-72x72.png" sizes="72x72"/>
          <link rel="apple-touch-icon" href="/favicon/apple-icon-76x76.png" sizes="76x76"/>
          <link rel="apple-touch-icon" href="/favicon/apple-icon-114x114.png" sizes="114x114"/>
          <link rel="apple-touch-icon" href="/favicon/apple-icon-120x120.png" sizes="120x120"/>
          <link rel="apple-touch-icon" href="/favicon/apple-icon-144x144.png" sizes="144x144"/>
          <link rel="apple-touch-icon" href="/favicon/apple-icon-152x152.png" sizes="152x152"/>
          <link rel="apple-touch-icon" href="/favicon/apple-icon-167x167.png" sizes="167x167"/>
          <link rel="apple-touch-icon" href="/favicon/apple-icon-180x180.png" sizes="180x180"/>
          <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" href="/favicon/apple-launch-640x1136.png"/>
          <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" href="/favicon/apple-launch-750x1334.png"/>
          <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)" href="/favicon/apple-launch-1242x2208.png"/>
          <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" href="/favicon/apple-launch-1242x2688.png"/>
          <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" href="/favicon/apple-launch-828x1792.png"/>
          <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" href="/favicon/apple-launch-1125x2436.png"/>
          <link rel="apple-touch-startup-image" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)" href="/favicon/apple-launch-1668x2388.png"/>
          <link rel="apple-touch-startup-image" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)" href="/favicon/apple-launch-1668x2224.png"/>
          <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" href="/favicon/apple-launch-1536x2048.png"/>
          <link rel="apple-touch-startup-image" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" href="/favicon/apple-launch-2048x2732.png"/>


          <meta property="og:title" content={title || Head.defaultProps.title}/>
          <meta property="og:description" content={description || Head.defaultProps.description}/>
          <meta property="og:type" content={'website'}/>
          <meta property="og:site_name" content="TripBtoz"/>
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
          <meta name="msapplication-TileColor" content="#fff"/>
          <meta name="application-name" content="TripBtoz"/>
          <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png"/>
          <meta name="google-signin-client_id" content={''}/>
          <meta name="apple-mobile-web-app-title" content="AppTitle"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
          <meta name="apple-touch-fullscreen" content="yes"/>

          <link rel="icon" type="image/png" href={'/favicon/favicon-16x16.png'} sizes="16x16"/>
          <link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" sizes="32x32"/>
          <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96"/>
          <link rel="icon" type="image/png" href="/favicon/favicon-196x196.png" sizes="196x196"/>

          <link rel="icon" type="image/png" href={"/favicon/android-icon-36x36.png"} sizes={"36x36"}/>
          <link rel="icon" type="image/png" href={"/favicon/android-icon-48x48.png"} sizes={"48x48"}/>
          <link rel="icon" type="image/png" href={"/favicon/android-icon-72x72.png"} sizes={"72x72"}/>
          <link rel="icon" type="image/png" href={"/favicon/android-icon-96x96.png"} sizes={"96x96"}/>
          <link rel="icon" type="image/png" href={"/favicon/android-icon-144x144.png"} sizes={"144x144"}/>
          <link rel="icon" type="image/png" href={"/favicon/android-icon-192x192.png"} sizes={"192x192"}/>

          <link rel="shortcut icon" href="/favicon/favicon.ico?v2"/>
          <link rel="mask-icon" color="#fff" href="/favicon/safari-pinned-tab.svg?v2"/>
          <link rel="manifest" href="/favicon/manifest.json"/>
        </Helmet>
      </HelmetProvider>
  )
}

Head.defaultProps = {
  title      : '트립비토즈',
  description: '1,940만 명 국민카드 고객 전용 자유여행 플랫폼 - 티티비비 TTBB',
  keyword    : ['호텔 예약, 항공권, 액티비티 예약, 여행 일정 추천, 카드사 할인, 최저가 예약, 티티비비 (TTBB)'],
  themeColor : '#be1d4a'
};

const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps)(Head);
