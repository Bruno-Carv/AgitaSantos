import Styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = Styled.View`
    flex: 1;
    background: #FFF;
    padding: 0 18px;
`;

export const Form = Styled.ScrollView`
    padding: 0px 0px;
    padding-bottom: 80px;
`;

export const Image = Styled.Image`
    width: 100%;
    height: 100px;
    resize-mode: contain;
`;


export const Row = Styled.View`
    display: flex;

    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
`;