import styled from 'styled-components';
import propToStyle from '../../../../utils/propToStyle';

const Box = styled.div`
    ${propToStyle('display')}
    ${propToStyle('flex')}
    ${propToStyle('flexWrap')}
    ${propToStyle('flexDirection')}
    ${propToStyle('flexGrow')}
    ${propToStyle('justifyContent')}
    ${propToStyle('backgroundColor')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
    ${propToStyle('padding')}
`;

export default Box;
