import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Chip } from 'react-native-paper';

export default function Filter({key, onPress, name}) {
    return (
        <>
            <TouchableOpacity
                key={key}
                style={{ marginLeft: 10 }}
                onPress={onPress}
                activeOpacity={0.8}>
                <Chip>{name}</Chip>
            </TouchableOpacity>
        </>
    );
}
