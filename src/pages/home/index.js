import React, {useEffect} from 'react';
import { View,Text } from 'react-native';
import { getTokey } from '../../services/auth';

export default function Home(){

    useEffect(() => {
        const Tokey = getTokey();

    },[]);

    return(
        <View>
            
        </View>
    );
}