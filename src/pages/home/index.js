import React, {useEffect} from 'react';
import { View,Text } from 'react-native';
import { getTokey, signOut } from '../../services/auth';

export default function Home(){

    useEffect(() => {
        const Tokey = getTokey();
        console.warn(Tokey);
    },[]);

    return(
        <View>
            <Text>Home</Text>
        </View>
    );
}