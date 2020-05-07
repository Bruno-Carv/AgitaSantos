import React from 'react';
import Styled from 'styled-components/native';
import {FontAwesome5} from '@expo/vector-icons';

export const View = Styled.View`
    padding-top: 20px;
`;

export const ButtonView = Styled.TouchableOpacity`
    padding: 10px;
    border-radius: 8px;
    background: #ffffff;
    width: auto;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const TextButton = Styled.Text`
    font-size: 15px;
    color: #000;
    font-weight: bold;
    padding-left: 10px;
`;

export default function GoogleBottom(){
    
    const responseGoogle = (response) => {
        console.log(response);
    }

    return(
        <View>
            <ButtonView>
                <FontAwesome5 name="google" size={18} color="#000" />                
                <TextButton>
                    Google SignIn
                </TextButton>
            </ButtonView>
        </View>
    );
}