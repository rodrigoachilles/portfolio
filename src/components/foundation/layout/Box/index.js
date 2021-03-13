import styled from 'styled-components';
import propToStyle from '../../../../utils/propToStyle';

const Box = styled.div`
    ${propToStyle('display')}
    ${propToStyle('flex')}
    ${propToStyle('flexWrap')}
    ${propToStyle('flexDirection')}
    ${propToStyle('flexGrow')}
    ${propToStyle('justifyContent')}
    ${propToStyle('alignItems')}

    ${propToStyle('backgroundColor')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}

    ${propToStyle('boxShadow')}
    ${propToStyle('padding')}
    ${propToStyle('margin')}
`;

export default Box;
