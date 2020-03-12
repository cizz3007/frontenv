import styled,{css} from 'styled-components'
import {blackColor, kbYellowColor, whiteColor} from '@global/styleVariable'
import {SpanTheme} from '@atoms/span/defaultSpan'

const TtbbStyle = css`
  display: inline-block;
  background-color: ${kbYellowColor};
  border-radius: 12px;
  line-height: 2.5rem;
`
const DefaultStyle = css`
  display: inline-block;
  background-color: ${whiteColor};
  border-radius: 4px;
  line-height: 1.9rem;
  border: 1px solid ${blackColor};
`
export const DefaultStyledSpan = styled.span`
  ${props => props.css}
 /*theme TTBB*/
  ${props => (props.theme === SpanTheme.TTBB) ? TtbbStyle:null}
 
 /*theme Default*/
   ${props => props.theme === SpanTheme.DEFAULT ?DefaultStyle:null}
`
