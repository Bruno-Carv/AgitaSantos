import Styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = Styled.View`
    flex: 1;
    background: #FFF;
    padding: 0 18px;
    padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const Form = Styled.View`
    padding: 25px 0px;
`;

export const Image = Styled.Image`
    width: 100%;
    height: 240px;
    resize-mode: contain;
`;

export const ButtonSocial = Styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
`;