import Styled from 'styled-components/native';

export const Container = Styled.View`
    flex: 1;
    background: #E4EEFA;
`;

export const ViewDescription = Styled.View`
    background: #FFF;
    border-top-left-radius: 45px;
    border-top-right-radius: 45px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    width: 100%;
    top: 55%;
    z-index: 1;
    position: absolute;
    bottom: 0;
`;

export const Heading = Styled.View`
    padding: 48px 45px 0px 45px;


`;

export const Body = Styled.View`
    padding: 16px 45px 0px 45px;

`;

export const Footer = Styled.View`
    padding: 44px 45px 0px 45px;
    justify-content: space-between;
`;

export const Title = Styled.Text`
    font-size: 30px;
    font-weight: bold;
`;

export const Description = Styled.Text`
    font-size: 16px;
`;

export const Image = Styled.ImageBackground`
    flex: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    bottom: 80px;
`;