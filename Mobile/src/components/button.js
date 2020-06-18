import React from 'react';
import Styled from 'styled-components/native';

export const View = Styled.View`
    padding-top: 20px;
`;

export const ButtonView = Styled.TouchableOpacity`
    padding: 10px;
    border-radius: 8px;
    background: #358062;
    width: auto;
    height: 60px;
    justify-content: center;
    align-items: center;
`;

export const TextButton = Styled.Text`
    font-size: 16px;
    color: #FFF;
    font-weight: bold;
`;

export default function Button({ Text, onPress, style }) {
    return (
        <View>
            <ButtonView onPress={onPress}>
                <TextButton>
                    {Text}
                </TextButton>
            </ButtonView>
        </View>
    );
}