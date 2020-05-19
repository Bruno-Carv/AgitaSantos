import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { Avatar } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome5';

import LoadingPage from './pages/loading';

import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';

import HomePage from './pages/home';
import MapsPage from './pages/maps';
import ProfilePage from './pages/profile';
import CamPage from './pages/Cam';
import CommunityPage from './pages/Community';

const HomeStack = createMaterialBottomTabNavigator({
    Feed: {
        screen: HomePage,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Icon name="home" size={20} color={tintColor} />
            )
        },
    },
    Comunidade:{
        screen: CommunityPage,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Icon name="theater-masks" size={20} color={tintColor} />
            )
        },
    },
    Agita: {
        screen: CamPage,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Icon name="plus" size={20} color={tintColor} />
            )
        },
    },
    Eventos: {
        screen: MapsPage,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Icon name="map-marked-alt" size={20} color={tintColor} />
            )
        },
    },
    Perfil: {
        screen: ProfilePage,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Icon name="user-circle" size={20} color={tintColor} />
            )
        },
    }
}, {
    initialRouteName: 'Feed',
    activeColor: '#358062',
    inactiveColor: '#000',
    barStyle: { backgroundColor: '#FFF' },
});

const LoginStack = createStackNavigator({
    Login: {
        screen: SignInPage
    },
    Cadastro: {
        screen: SignUpPage
    }
},
    {
        navigationOptions: {
            header: {
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    border: 0,
                },
            },
        },
    },
);

const AppSwith = createSwitchNavigator({
    LoginStack,
    HomeStack
});

const AppRouter = createAppContainer(AppSwith);

export default AppRouter;