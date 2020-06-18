import React from 'react';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const View = Styled.View`
    display: flex;
    justify-content: flex-end;
    padding: 15px 25px;
`;

export const ButtonView = Styled.TouchableOpacity`
    padding: 10px;
    border-radius: 50px;
    background: #FFF;
    border: 3px solid #358062
    width: 80px;
    height: 80px;
    justify-content: center;
    align-items: center;
`;

export const TextButton = Styled.Text`
    font-size: 16px;
    color: #FFF;
    font-weight: bold;
`;


export default function CameraButton({ onPress, Text, size, icon, sizeIcon = 30, colorIcon = '#358062'  }) {
    return (
        <View>
            <ButtonView onPress={onPress} style={{ width:size, height:size }}>
                <Icon name={icon} size={sizeIcon} color={colorIcon}/>
            </ButtonView>
        </View>
    );
}