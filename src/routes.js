import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import LoadingPage from './pages/loading';

import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';

import HomePage from './pages/home';
import MapsPage from './pages/maps';

const HomeStack = createDrawerNavigator({
    Home:{
        screen: HomePage
    },
    Event:{
        screen: MapsPage
    }
});

const LoginStack = createStackNavigator({
    Login:{
        screen: SignInPage
    },
    Cadastro:{
        screen: SignUpPage
    }
},{
    headerMode: 'none'
});

const AppSwith = createSwitchNavigator({
    LoadingPage,
    LoginStack,
    HomeStack
});

const AppRouter = createAppContainer(AppSwith);

export default AppRouter;