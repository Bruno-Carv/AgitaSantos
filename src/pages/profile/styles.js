import Styled from 'styled-components/native';

import Constants from 'expo-constants';

export const Container = Styled.ScrollView`
    flex: 1;
    padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const PhotoUser = Styled.Image`

`;

export const FeedsList = Styled.FlatList`

`;

export const CardFas = Styled.View`

`;

export const Name = Styled.Text`
    font-size: 30px;
`;

export const Action = Styled.Text`
    font-size: 20px;
    color: #9F9F9F;
`;

export const CardProfileDate = Styled.View`
    padding: 0 24px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
`;