import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text } from './styles';
import { List } from 'react-native-paper';
import Filter from '../../components/filter';

export default function Freelancer() {
    return (
        <View>
            <ScrollView
                horizontal={true}
                contentContainerStyle={{ paddingLeft: 10, paddingRight: 20 }}
                showsHorizontalScrollIndicator={false}
            >
                <Filter name="Musicos" />
                <Filter name="Teatro" />
                <Filter name="Dança" />
                <Filter name="Arte visual" />
                <Filter name="Trupes" />
            </ScrollView>
            <ScrollView>
                
            </ScrollView>
        </View>
    );
}