import Styled from 'styled-components/native';
import Contrant from 'expo-constants';

export const ListFeed = Styled.FlatList`
    padding-top: ${Contrant.statusBarHeight + 20}px;
`;

export const Modal = Styled.Modal`
    margin-top: 80%;

`;