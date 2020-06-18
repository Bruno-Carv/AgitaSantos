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
import PhotoPage from './pages/Photo';
import FreelancerPage from './pages/Freelancer';

const CameraStack = createStackNavigator({
    Camera: {
        screen: CamPage
    },
});

const PhotoStack = createStackNavigator({
    Photo:{
        screen: PhotoPage
    }
});

const HomeStack = createMaterialBottomTabNavigator({
    Feed: {
        screen: HomePage,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Icon name="theater-masks" size={20} color={tintColor} />
            )
        },
    },
    Freelancer:{
        screen: FreelancerPage,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Icon name="business-time" size={20} color={tintColor} />
            )
        },
    },
    Agita: {
        screen: CameraStack,
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
    HomeStack,
    PhotoStack
});

const AppRouter = createAppContainer(AppSwith);

export default AppRouter;