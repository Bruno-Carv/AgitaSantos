import Styled from 'styled-components/native';

export const ViewClose = Styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
`;

export const ViewController = Styled.View` 
    position: absolute;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    bottom: 20px;
    padding: 0px 20px;
`;

export const ViewPost = Styled.View` 
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ViewSocial = Styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ViewSend = Styled.View`
    display: flex;
    justify-content: space-between;
`;


export const SocialButton = Styled.TouchableOpacity`
    margin: 0px 40px 0px 0px;
`;

export const Image = Styled.ImageBackground`
    flex: 1;
    padding: 24px;
    resizeMode: contain;
    height: 100%;
    width: 100%
    
`;

export const Modal = Styled.Modal``;
export const ModalView = Styled.View`
    padding: 20px;
`;