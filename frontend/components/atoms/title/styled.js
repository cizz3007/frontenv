import styled,{css} from 'styled-components';

export const MIXIN_LINK_TITLE = css`
    font-weight: bold;
    color:pink;
`

export const H1Styled = styled['h1']`
      ${props=> props.css}
`

