import {css} from 'styled-components'

/**
 * @description: 브레이크 포인트 자유롭게 추가하길(기존 값 변경은 x)
 * */
export const BreakPoint = {
  mobileSmallest: 320,
  mobileSmall   : 375,
  mobileDefault : 480,
  tabletSmall   : 768,
  tabletDefault : 1024,
  desktopSmall  : 1280,
  desktopDefault: 1920,
}

export default Object.keys(BreakPoint).reduce((acc, label) => {
  acc[label] = (...args) => css`
      @media only screen and (max-width: ${BreakPoint[label]}px) {
         ${css(...args)};
      }
   `
  return acc
}, {})
