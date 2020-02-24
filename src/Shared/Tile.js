
import styled from 'styled-components';
import { subtleBoxShadow, lightBlueBackground, greenBoxShadow, redBoxShadow } from './Styles';

export const Tile = styled.div`
    background-color: #061a44;
    box-shadow: 0px 0px 5px 1px #121d5b;
    // ${subtleBoxShadow}
    // ${lightBlueBackground}
    padding: 10px;   
`;

export const SelectableTile = styled(Tile)`
    &:hover {
        cursor: pointer;
        ${greenBoxShadow}
    }
`;

export const DeletableTile = styled(SelectableTile)`
    &:hover {
        cursor: pointer;
        ${redBoxShadow}
    }
`;

export const DisabledTile = styled(Tile)`
    pointer-events: none;
    opacity: 0.4;
`;