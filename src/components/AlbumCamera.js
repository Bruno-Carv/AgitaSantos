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
    background: #FFF;
    width: 120px;
    height: 220px;
    border: 3px solid #358062
    justify-content: center;
    align-items: center;
`;

export const TextButton = Styled.Text`
    font-size: 16px;
    color: #FFF;
    font-weight: bold;
`;


export default function AlbumCamera({ onPress, Text, size, icon, sizeIcon = 30, colorIcon }) {
    return (
        <View>
            <ButtonView onPress={onPress} style={{ width:size, height:size }}>
                <Icon name={icon} size={sizeIcon} color={colorIcon}/>
            </ButtonView>
        </View>
    );
}