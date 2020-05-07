import Styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = Styled.View`
    flex: 1;
    background: #E4EEFA;
    padding: 0 18px;
    padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const Form = Styled.View`
    padding: 25px 0px;
`;

export const Image = Styled.Image`
    width: 100%;
    height: 100px;
    resize-mode: contain;
`;

export const ButtonSocial = Styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
`;