import React from 'react';
import Styled from 'styled-components/native';

export const InputComponent = Styled.TextInput`
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
    background-color: white;
`;

export const View = Styled.View`
    padding-top: 10px;
`;

export default function Button({ ...rest }) {
    return (
        <View>
            <InputComponent
                {...rest}
            />
        </View>
    );
}