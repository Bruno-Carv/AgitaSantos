import React from 'react';
import Styled from 'styled-components/native';
import {FontAwesome5} from '@expo/vector-icons';

export const View = Styled.View`
    padding-top: 20px;
`;

export const ButtonView = Styled.TouchableOpacity`
    padding: 10px;
    border-radius: 8px;
    background: #0d8af0;
    width: auto;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-right: 20px;
`;

export const TextButton = Styled.Text`
    font-size: 15px;
    color: #FFF;
    font-weight: bold;
    margin-left: 10px;
`;

export default function FacebookBottom(){
    
    const responseFacebook = (response) => {
        console.log(response);
    }

    return(
        <View>
            <ButtonView>
                <FontAwesome5 name="facebook" size={18} color="#FFF" />                
                <TextButton>
                    Facebook SignIn
                </TextButton>
            </ButtonView>
        </View>
    );
}