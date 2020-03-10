import styled from 'styled-components';
import {aLinkHoverColor, defaultInputColor} from '../../../global/styleVariable';

const DefaultInputStyle = styled.input`
    min-width: 130px;
    color:${props => props.length >= 4 ? aLinkHoverColor : defaultInputColor};
    letter-spacing:${props => props.length >= 4 ? '6px' : '1px'};
    transition:all 0.24s ease-out;
    ${props => props.css}
`

export default DefaultInputStyle
